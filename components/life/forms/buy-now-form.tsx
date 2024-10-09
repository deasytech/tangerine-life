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

const productList = [
  {
    id: "group-life-assurance",
    label: "Group Life Assurance",
  },
  {
    id: "credit-life-insurance",
    label: "Credit Life Insurance",
  },
] as const

const FormSchema = z.object({
  fullName: z.string().min(1),
  email: z.string().email().min(1),
  telephone: z.string({ message: "Phone number must be at least 11 characters" }).min(11).max(11),
  product: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
})

export function GetQuoteForm() {
  const [ isSubmitting, setIsSubmitting ] = useState(false);

  const defaultValues = {
    fullName: "",
    email: "",
    telephone: "",
    product: [],
  };

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues
  })

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setIsSubmitting(true);

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
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <div className="text-white">
              {Object.entries(data).map(([ key, value ]) => (
                <div key={key} className="flex justify-between mb-2">
                  <span className="font-semibold">{key}:</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </pre>
        ),
      });

      form.reset(defaultValues);
    } catch (error) {
      console.error("Error submitting data:", error);
      toast({
        title: "Error",
        description: "There was an issue submitting the form",
        variant: "destructive",
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
          name="product"
          render={() => (
            <FormItem>
              <div className="flex flex-wrap gap-4">
                {productList.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="product"
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
