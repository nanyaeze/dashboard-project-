import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "react-router-dom"

export default function ForgotPassword() {
  const [countdown, setCountdown] = useState(23)
  const [otp, setOtp] = useState("")

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [countdown])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Reset Your Password.</CardTitle>
          <CardDescription>Enter your 6 digit OTP code in order to reset.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-3 text-sm">
            OTP has been sent to your email.
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" value="elementary221b@gmail.com" disabled className="bg-gray-100" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="otp">6-Digit OTP</Label>
            <Input
              id="otp"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
              className="text-center text-2xl tracking-widest"
              placeholder="••••••"
            />
          </div>
          <Button className="w-full">Reset Password</Button>
          <div className="text-center text-sm">
            {countdown > 0 ? (
              <p className="text-gray-500">Didn't receive the code? Re-send OTP Code in {countdown}s</p>
            ) : (
              <button className="text-blue-600 hover:underline">Re-send OTP Code</button>
            )}
          </div>
        </CardContent>
      </Card>
      <footer className="mt-8 text-sm text-gray-500">
        Copyright 2025 slothUI ©{" "}
        <Link to="/privacy" className="hover:underline mx-2">Privacy Policy</Link>
        <Link to="/terms" className="hover:underline mx-2">Terms & Conditions</Link>
      </footer>
    </div>
  )
}