"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight, Loader2 } from "lucide-react"
import { useState } from "react"

const planList = [
  { "id": "education-plan", "label": "Education Plan" },
  { "id": "protection-plan", "label": "Protection Plan" },
  { "id": "mortgage-protection-plan", "label": "Mortgage protection Plan" },
  { "id": "family-welfare-plan", "label": "Family Welfare Plan" },
  { "id": "triple-plan", "label": "Triple Plan" },
  { "id": "credit-life-plan", "label": "Credit Life Plan" },
  { "id": "savings-plan", "label": "Savings Plan" },
  { "id": "savings-plus-plan", "label": "Savings Plus Plan" },
  { "id": "tang-flex-plan", "label": "Tang Flex Plan" },
  { "id": "tang-betta-plan", "label": "Tang Betta Plan" },
  { "id": "tang-vip-plan", "label": "Tang VIP Plan" },
] as const

const FormSchema = z.object({
  fullName: z.string().min(1),
  email: z.string().email().min(1),
  telephone: z.string({ message: "Phone number must be at least 11 characters" }).min(11).max(11),
  plans: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one plan.",
  }),
})

export function GetQuoteForm() {
  const [ isSubmitting, setIsSubmitting ] = useState(false);

  const defaultValues = {
    fullName: "",
    email: "",
    telephone: "",
    plans: [],
  };

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues
  })

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setIsSubmitting(true);
    console.log(JSON.stringify(data))
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get-quote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the data");
      }

      const result = await response.json();
      console.log("Response from server:", result);

      toast({
        title: "Data submitted successfully",
        description: "We will contact you with more information in 24 hours.",
        variant: "default",
      });

      form.reset(defaultValues);
    } catch (error) {
      console.error("Error submitting data:", error);
      toast({
        title: "Error",
        description: "There was an issue submitting the form",
        variant: "success",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem className="space-y-1.5 w-full">
              <FormLabel>Full name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Full name"
                  className="no-focus text-base light-border-2 min-h-[56px] border"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-1.5 w-full">
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="example@email.com"
                    className="no-focus text-base light-border-2 min-h-[56px] border"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="telephone"
            render={({ field }) => (
              <FormItem className="space-y-1.5 w-full">
                <FormLabel>Phone number</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="080XXXXXXXX"
                    className="no-focus text-base light-border-2 min-h-[56px] border"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <p className="my-4 text-sm">Select Cover(s)</p>
        <FormField
          control={form.control}
          name="plans"
          render={() => (
            <FormItem>
              <div className="flex flex-wrap gap-4">
                {planList.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="plans"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox className="w-6 h-6"
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([ ...field.value, item.id ])
                                  : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  )
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      )
                    }}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant="darkgreen" type="submit" size="lg" className="gap-2" disabled={isSubmitting}>
          {isSubmitting ? <Loader2 className="animate-spin" size={16} /> : 'Submit'}
          {!isSubmitting && <ArrowRight size={16} />}
        </Button>
      </form>
    </Form>
  )
}
