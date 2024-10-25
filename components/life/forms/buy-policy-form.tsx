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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { Input } from "@/components/ui/input"
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
  plans: z.string({ message: "Phone select a plan" }).min(1),
})

export function BuyPolicyForm() {
  const [ isSubmitting, setIsSubmitting ] = useState(false);

  const defaultValues = {
    fullName: "",
    email: "",
    telephone: "",
    plans: "",
  };

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues
  })

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setIsSubmitting(true);
    console.log(JSON.stringify(data))
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/buy-policy`, {
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
        <FormField
          control={form.control}
          name="plans"
          render={({ field }) => (
            <FormItem className="space-y-1.5 w-full text-start">
              <FormLabel>Plans</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl className="no-focus text-base light-border-2 min-h-[56px] border">
                  <SelectTrigger>
                    <SelectValue placeholder="Select plans" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {planList && planList.map((plan) => <SelectItem key={plan.id} value={plan.id}>
                    {plan.label}
                  </SelectItem>)}
                </SelectContent>
              </Select>
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
