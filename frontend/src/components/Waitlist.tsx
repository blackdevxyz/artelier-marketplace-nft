import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

const emailSchema = z
  .string()
  .trim()
  .email({ message: "Please enter a valid email address" });

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      emailSchema.parse(email);
      // setIsLoading(true);

      // Simulate API call
      // await new Promise(resolve => setTimeout(resolve, 1000));

      // inside handleSubmit after validation
      setIsLoading(true);
      try {
        const resp = await fetch("http://localhost:8080/api/waitlists", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, source: "homepage" }),
        });

        const data = await resp.json();
        if (!resp.ok)
          throw new Error(data.error || data.message || "Request failed");

        toast.success(data.message || "Joined waitlist");
        setEmail("");
      } catch (err) {
        toast.error(err.message ?? "Failed to join waitlist");
      } finally {
        setIsLoading(false);
      }

      toast.success("Success! You've joined the waitlist.");
      setEmail("");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="waitlist" className="py-24 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] glow-primary rounded-full blur-3xl opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="glass-effect rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Join the Genesis Drop
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Be the first to know when the Genesis Collection drops. Exclusive
              early access for stacks ecosystem waitlist members.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 bg-background/50"
                required
              />
              <Button
                variant="gradient"
                size="lg"
                type="submit"
                disabled={isLoading}
                className="sm:w-auto"
              >
                {isLoading ? "Joining..." : "Join Waitlist"}
              </Button>
            </form>

            <p className="text-sm text-muted-foreground mt-6">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
