import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating?: number;
}

const TestimonialCard = ({ name, role, content, rating = 5 }: TestimonialCardProps) => {
  return (
    <Card className="h-full border-border bg-card">
      <CardContent className="p-6">
        <div className="flex gap-1 mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
          ))}
        </div>
        <p className="text-muted-foreground mb-4 italic leading-relaxed">"{content}"</p>
        <div className="border-t border-border pt-4">
          <p className="font-semibold text-card-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
