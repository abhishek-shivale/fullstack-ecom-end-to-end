
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "../@/components/ui/card"
import { Label } from "../@/components/ui/label"
import { Input } from "../@/components/ui/input"
import { Button } from "../@/components/ui/button"
import {CalendarForm} from "./DateofBirth"

export default function RegisterComponent() {
  return (
    <div className="flex justify-center ">
    <Card className="mx-auto max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Login</CardTitle>
        <CardDescription>Enter your email and password to login to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="m@example.com" required type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" required placeholder="Enter your password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="text">Name</Label>
            <Input id="password" required placeholder="Enter your Name" type="text" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="text">photo</Label>
            <Input id="email" placeholder="Enter your Photo URL" required type="email" />
          </div>
          <div className="space-y-2">
            <CalendarForm />
          </div>
          <div className="space-y-2">

          </div>
          <Button  className="w-full" type="submit">
            Register
          </Button>
        </div>
      </CardContent>
    </Card>
    </div>
  )
}

