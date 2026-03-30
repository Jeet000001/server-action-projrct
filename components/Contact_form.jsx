"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { createContact } from "@/actions/ContactAction"

const Contact_form = () => {
    const [isSubmit, setIsSubmit] = useState(false)
    const [message, setMessage] = useState("")
    const [isSuccess, setIsSuccess] = useState(false)

    const onSubmit = async (e) => {
        e.preventDefault()
        setIsSubmit(true)
        setMessage("")

        const formData = new FormData(e.target)
        const result = await createContact(formData)

        if (result.success) {
            setIsSuccess(true)
            setMessage("Message sent successfully")
            e.target.reset()
        } else {
            setIsSuccess(false)
            setMessage(result.error || "Something went wrong")
        }

        setIsSubmit(false)
    }

    return (
        <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center p-8">
            <Card className="w-full max-w-[520px] bg-[#161616] border border-[#2a2a2a] rounded-sm shadow-[0_32px_80px_rgba(0,0,0,0.5)] animate-in slide-in-from-bottom-6 duration-500">

                <CardHeader className="px-10 pt-10 pb-6 border-b border-[#2a2a2a] flex flex-row items-end gap-4">
                    <CardTitle className="font-serif text-[1.75rem] font-semibold text-[#e8e2d9] tracking-tight leading-none">
                        Contact Us
                    </CardTitle>
                    <div className="w-10 h-0.5 bg-[#c8a96e] mb-1 shrink-0" />
                </CardHeader>

                <CardContent className="px-10 pt-8 pb-10">
                    <form id="contact-form" onSubmit={onSubmit} className="flex flex-col gap-5">

                        {/* Name + Email row */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1.5">
                                <Label
                                    htmlFor="name"
                                    className="text-[0.7rem] font-medium uppercase tracking-widest text-[#6b6560]"
                                >
                                    Name
                                </Label>
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="John Doe"
                                    required
                                    disabled={isSubmit}
                                    className="bg-[#1c1c1c] border border-[#2a2a2a] rounded-sm px-3.5 py-2.5 text-sm font-light text-[#e8e2d9] placeholder:text-[#3a3835] focus-visible:ring-0 focus-visible:border-[#c8a96e] focus-visible:shadow-[0_0_0_3px_rgba(200,169,110,0.08)] transition-all disabled:opacity-45"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <Label
                                    htmlFor="email"
                                    className="text-[0.7rem] font-medium uppercase tracking-widest text-[#6b6560]"
                                >
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    required
                                    disabled={isSubmit}
                                    className="bg-[#1c1c1c] border border-[#2a2a2a] rounded-sm px-3.5 py-2.5 text-sm font-light text-[#e8e2d9] placeholder:text-[#3a3835] focus-visible:ring-0 focus-visible:border-[#c8a96e] focus-visible:shadow-[0_0_0_3px_rgba(200,169,110,0.08)] transition-all disabled:opacity-45"
                                />
                            </div>
                        </div>

                        {/* Subject */}
                        <div className="flex flex-col gap-1.5">
                            <Label
                                htmlFor="subject"
                                className="text-[0.7rem] font-medium uppercase tracking-widest text-[#6b6560]"
                            >
                                Subject
                            </Label>
                            <Input
                                id="subject"
                                name="subject"
                                type="text"
                                placeholder="How can we help?"
                                required
                                disabled={isSubmit}
                                className="bg-[#1c1c1c] border border-[#2a2a2a] rounded-sm px-3.5 py-2.5 text-sm font-light text-[#e8e2d9] placeholder:text-[#3a3835] focus-visible:ring-0 focus-visible:border-[#c8a96e] focus-visible:shadow-[0_0_0_3px_rgba(200,169,110,0.08)] transition-all disabled:opacity-45"
                            />
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-1.5">
                            <Label
                                htmlFor="message"
                                className="text-[0.7rem] font-medium uppercase tracking-widest text-[#6b6560]"
                            >
                                Message
                            </Label>
                            <Textarea
                                id="message"
                                name="message"
                                placeholder="Write your message here..."
                                required
                                disabled={isSubmit}
                                className="bg-[#1c1c1c] border border-[#2a2a2a] rounded-sm px-3.5 py-2.5 text-sm font-light text-[#e8e2d9] placeholder:text-[#3a3835] min-h-[110px] leading-relaxed focus-visible:ring-0 focus-visible:border-[#c8a96e] focus-visible:shadow-[0_0_0_3px_rgba(200,169,110,0.08)] transition-all disabled:opacity-45 resize-y"
                            />
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            disabled={isSubmit}
                            className="mt-1 w-full bg-[#c8a96e] hover:bg-[#c8a96e]/85 text-[#0f0f0f] text-[0.8rem] font-medium uppercase tracking-widest rounded-sm py-5 transition-all hover:-translate-y-px active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmit ? "Sending..." : "Send Message"}
                        </Button>

                        {/* Status Message — single, color based on success/error */}
                        {message && (
                            <p className={`text-center text-[0.82rem] tracking-wide animate-in fade-in duration-300 ${
                                isSuccess ? "text-[#c8a96e]" : "text-red-400"
                            }`}>
                                {message}
                            </p>
                        )}

                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default Contact_form