import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { CalendarIcon, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Booking = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();                     // <-- add navigate

  const roomName  = searchParams.get("room")  || "Selected Room";
  const roomPrice = parseInt(searchParams.get("price") || "199");

  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [payment, setPayment] = useState("card");
  const [showConfirm, setShowConfirm] = useState(false);

  const nights =
    checkIn && checkOut
      ? Math.max(1, Math.ceil((+checkOut - +checkIn) / (1000 * 60 * 60 * 24)))
      : 0;

  const total = nights * roomPrice;

  const handleConfirm = () => {
    if (!checkIn || !checkOut || !fullName || !email) {
      alert("Please complete all required fields.");
      return;
    }
    setShowConfirm(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* === Booking Section === */}
      <main className="flex-grow bg-luxury-cream py-12 px-4 mt-12"> {/* margin top added */}
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-serif font-bold text-center mb-10">
            Book Your Stay
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* LEFT: Form */}
            <Card className="p-6 shadow-lg">
              <CardContent className="space-y-6">
                {/* Dates */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1 text-sm font-medium">Check-In</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkIn ? checkIn.toDateString() : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="p-0">
                        <Calendar mode="single" selected={checkIn} onSelect={setCheckIn} />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-medium">Check-Out</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkOut ? checkOut.toDateString() : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="p-0">
                        <Calendar mode="single" selected={checkOut} onSelect={setCheckOut} />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                {/* Guests */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1 text-sm font-medium">Adults</label>
                    <Select value={adults.toString()} onValueChange={v => setAdults(parseInt(v))}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        {[1,2,3,4].map(n => <SelectItem key={n} value={n.toString()}>{n}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-medium">Children</label>
                    <Select value={children.toString()} onValueChange={v => setChildren(parseInt(v))}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        {[0,1,2,3].map(n => <SelectItem key={n} value={n.toString()}>{n}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Contact */}
                <div>
                  <label className="block mb-1 text-sm font-medium">Full Name</label>
                  <Input value={fullName} onChange={e => setFullName(e.target.value)} />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium">Email</label>
                  <Input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                </div>

                {/* Payment Method */}
                <div>
                  <label className="block mb-1 text-sm font-medium">Payment Method</label>
                  <Select value={payment} onValueChange={setPayment}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="card">Credit/Debit Card</SelectItem>
                      <SelectItem value="arrival">Pay on Arrival</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* RIGHT: Summary */}
            <Card className="p-6 shadow-lg">
              <CardContent className="space-y-6">
                <div className="border-b pb-4">
                  <h2 className="text-xl font-semibold">{roomName}</h2>
                  <p className="text-gray-600">₦{roomPrice} / night</p>
                </div>

                <div className="text-right border-t pt-4">
                  <p className="text-gray-700">
                    {nights} night{nights !== 1 && "s"} × ₦{roomPrice}
                  </p>
                  <p className="text-2xl font-bold text-luxury-gold">
                    Total: ₦{isNaN(total) ? 0 : total}
                  </p>
                </div>

                <Button variant="luxury" className="w-full" onClick={handleConfirm}>
                  Confirm Booking
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirm} onOpenChange={setShowConfirm}>
        <DialogContent className="max-w-md text-center">
          <Check className="mx-auto mb-4 w-12 h-12 text-green-500" />
          <h3 className="text-xl font-semibold mb-2">Booking Confirmed!</h3>
          <p className="mb-4">
            Thank you, {fullName}. We’ve reserved the {roomName} from{" "}
            {checkIn?.toDateString()} to {checkOut?.toDateString()}.
          </p>
          <DialogClose asChild>
            <Button
              variant="luxury"
              className="w-full"
              onClick={() => navigate("/rooms")}   // <-- navigate to rooms page
            >
              Close
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Booking;
