import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BookingForm = () => {
  return (
    <Card className="w-full max-w-md bg-white shadow-luxury">
      <CardHeader>
        <CardTitle className="text-2xl font-serif text-luxury-brown text-center">
          Book A Room
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="checkin">Check In</Label>
            <Input id="checkin" type="date" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="checkout">Check Out</Label>
            <Input id="checkout" type="date" />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="adults">Adults</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Adults" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Adult</SelectItem>
                <SelectItem value="2">2 Adults</SelectItem>
                <SelectItem value="3">3 Adults</SelectItem>
                <SelectItem value="4">4 Adults</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="children">Children</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Children" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">0 Children</SelectItem>
                <SelectItem value="1">1 Child</SelectItem>
                <SelectItem value="2">2 Children</SelectItem>
                <SelectItem value="3">3 Children</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="room-type">Room Type</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Room Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="deluxe">Deluxe Room</SelectItem>
              <SelectItem value="suite">Luxury Suite</SelectItem>
              <SelectItem value="penthouse">Penthouse</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button variant="luxury" size="lg" className="w-full">
          Book Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default BookingForm;