import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CalendarIcon, Star, Users, Wifi, Coffee, Car, Utensils, Heart, Shield, Award } from "lucide-react";

import room1 from "@/assets/room-1.jpg";
import room2 from "@/assets/room-2.jpg";
import room3 from "@/assets/room-3.jpg";
import room4 from "@/assets/room-3.jpg";
import suiteImage from "@/assets/suite.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import { Link } from "react-router-dom";

const Rooms = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [priceRange, setPriceRange] = useState([100, 500]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [sortBy, setSortBy] = useState("popularity");
  const [activeRoom, setActiveRoom] = useState(null);

  const rooms = [
    {
      id: 1,
      name: "Deluxe King Room",
      category: "Deluxe",
      price: 249,
      size: "45 m²",
      beds: "1 King Bed",
      images: [room1, room2, room3],
      amenities: ["wifi", "breakfast", "view", "airConditioning"],
      description: "Spacious room with a king-sized bed and luxurious amenities. Perfect for couples or solo travelers seeking comfort and style.",
      featured: true
    },
    {
      id: 2,
      name: "Executive Suite",
      category: "Suite",
      price: 399,
      size: "70 m²",
      beds: "1 King Bed + Living Area",
      images: [room2, room3, room4],
      amenities: ["wifi", "breakfast", "view", "airConditioning", "balcony", "minibar"],
      description: "Our premium suite featuring a separate living area, luxurious bathroom, and stunning city views. Includes exclusive access to the executive lounge.",
      featured: true
    },
    {
      id: 3,
      name: "Superior Double Room",
      category: "Superior",
      price: 199,
      size: "35 m²",
      beds: "2 Double Beds",
      images: [room3, room1, room4],
      amenities: ["wifi", "airConditioning"],
      description: "Comfortable and well-appointed room with two double beds, ideal for friends or family traveling together.",
      featured: false
    },
    {
      id: 4,
      name: "Presidential Suite",
      category: "Suite",
      price: 699,
      size: "120 m²",
      beds: "1 King Bed + Multiple Areas",
      images: [room4, room1, room2],
      amenities: ["wifi", "breakfast", "view", "airConditioning", "balcony", "minibar", "butler", "jacuzzi"],
      description: "The ultimate in luxury accommodation. This expansive suite features a dining area, study, and luxurious spa bathroom with panoramic views of the city.",
      featured: true
    },
  ];

  const amenitiesOptions = [
    { id: "wifi", label: "Wi-Fi", icon: <Wifi size={16} /> },
    { id: "breakfast", label: "Breakfast Included", icon: <Coffee size={16} /> },
    { id: "view", label: "City View", icon: <Star size={16} /> },
    { id: "airConditioning", label: "Air Conditioning", icon: <Shield size={16} /> },
    { id: "balcony", label: "Balcony", icon: <Award size={16} /> },
    { id: "minibar", label: "Minibar", icon: <Utensils size={16} /> },
    { id: "butler", label: "Butler Service", icon: <Users size={16} /> },
    { id: "jacuzzi", label: "Jacuzzi", icon: <Heart size={16} /> },
  ];

  const handleAmenityChange = (amenityId) => {
    if (selectedAmenities.includes(amenityId)) {
      setSelectedAmenities(selectedAmenities.filter(id => id !== amenityId));
    } else {
      setSelectedAmenities([...selectedAmenities, amenityId]);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
    <div className="min-h-screen bg-luxury-cream">
      {/* Hero Banner */}
      <section
  className="relative h-[36rem] flex items-center justify-center bg-cover bg-center"
  style={{ backgroundImage: `url(${heroBg})` }}
>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">Discover Our Signature Stays</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Experience unparalleled luxury in the heart of London
          </p>
        </div>
      </section>

      {/* Filter & Sort Bar */}
      <section className="container mx-auto px-4 py-8 -mt-16 relative z-20">
        <Card className="p-6 shadow-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div>
              <Label htmlFor="check-in" className="block mb-2 text-sm font-medium">Check In</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {checkInDate ? checkInDate.toDateString() : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={checkInDate}
                    onSelect={setCheckInDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div>
              <Label htmlFor="check-out" className="block mb-2 text-sm font-medium">Check Out</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {checkOutDate ? checkOutDate.toDateString() : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={checkOutDate}
                    onSelect={setCheckOutDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div>
              <Label htmlFor="adults" className="block mb-2 text-sm font-medium">Adults</Label>
              <Select value={adults.toString()} onValueChange={(value) => setAdults(parseInt(value))}>
                <SelectTrigger>
                  <SelectValue placeholder="Adults" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4].map(num => (
                    <SelectItem key={num} value={num.toString()}>{num} {num === 1 ? 'Adult' : 'Adults'}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="children" className="block mb-2 text-sm font-medium">Children</Label>
              <Select value={children.toString()} onValueChange={(value) => setChildren(parseInt(value))}>
                <SelectTrigger>
                  <SelectValue placeholder="Children" />
                </SelectTrigger>
                <SelectContent>
                  {[0, 1, 2, 3].map(num => (
                    <SelectItem key={num} value={num.toString()}>{num} {num === 1 ? 'Child' : 'Children'}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            <div>
              <Label className="block mb-2 text-sm font-medium">Price Range (per night)</Label>
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={1000}
                step={10}
                className="my-2"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
            
            <div>
              <Label className="block mb-2 text-sm font-medium">Sort By</Label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popularity">Popularity</SelectItem>
                  <SelectItem value="priceLow">Price: Low to High</SelectItem>
                  <SelectItem value="priceHigh">Price: High to Low</SelectItem>
                  <SelectItem value="size">Room Size</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button className="w-full md:w-auto" variant="luxury">
              Apply Filters
            </Button>
          </div>
          
          <div className="mt-6">
            <Label className="block mb-2 text-sm font-medium">Amenities</Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {amenitiesOptions.map(amenity => (
                <div key={amenity.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={amenity.id} 
                    checked={selectedAmenities.includes(amenity.id)}
                    onCheckedChange={() => handleAmenityChange(amenity.id)}
                  />
                  <Label htmlFor={amenity.id} className="text-sm font-normal flex items-center">
                    {amenity.icon}
                    <span className="ml-2">{amenity.label}</span>
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </section>

      {/* Room Cards Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map(room => (
            <Card key={room.id} className="overflow-hidden shadow-luxury hover:shadow-luxury-hover transition-all duration-300">
              <div className="relative">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={room.images[0]} 
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <Badge className="absolute top-4 left-4 bg-luxury-gold text-white">
                  {room.category}
                </Badge>
                {room.featured && (
                  <Badge className="absolute top-4 right-4 bg-red-600 text-white">
                    Featured
                  </Badge>
                )}
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-serif font-bold text-luxury-brown">{room.name}</h3>
                  <div className="text-luxury-gold font-bold">${room.price}<span className="text-sm font-normal text-gray-600">/night</span></div>
                </div>
                
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <span className="mr-4">{room.size}</span>
                  <span>{room.beds}</span>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-2">{room.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {room.amenities.map(amenityId => {
                    const amenity = amenitiesOptions.find(a => a.id === amenityId);
                    return amenity ? (
                      <Badge key={amenityId} variant="outline" className="flex items-center text-xs">
                        {amenity.icon}
                        <span className="ml-1">{amenity.label}</span>
                      </Badge>
                    ) : null;
                  })}
                </div>
                
                <div className="flex justify-between">
                 <Dialog>
  <DialogTrigger asChild>
    <Button variant="outline" onClick={() => setActiveRoom(room)}>
      View Details
    </Button>
  </DialogTrigger>

  <DialogContent
    className="
      w-[95vw]
      max-w-4xl
      max-h-[90vh]
      overflow-y-auto
      p-4 md:p-6
      rounded-lg
    "
  >
    {activeRoom && (
      <div className="p-0 md:p-2">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="h-64 md:h-96">
                              <img 
                                src={activeRoom.images[0]} 
                                alt={activeRoom.name}
                                className="w-full h-full object-cover rounded-lg"
                              />
                            </div>
                            <div>
                              <h3 className="text-2xl font-serif font-bold text-luxury-brown mb-2">{activeRoom.name}</h3>
                              <div className="text-xl text-luxury-gold font-bold mb-4">${activeRoom.price}<span className="text-sm font-normal text-gray-600">/night</span></div>
                              <div className="flex items-center text-sm text-gray-600 mb-4">
                                <span className="mr-4">{activeRoom.size}</span>
                                <span>{activeRoom.beds}</span>
                              </div>
                              <p className="text-gray-600 mb-4">{activeRoom.description}</p>
                              
                              <div className="mb-6">
                                <h4 className="font-semibold mb-2">Amenities</h4>
                                <div className="grid grid-cols-2 gap-2">
                                  {activeRoom.amenities.map(amenityId => {
                                    const amenity = amenitiesOptions.find(a => a.id === amenityId);
                                    return amenity ? (
                                      <div key={amenityId} className="flex items-center">
                                        {amenity.icon}
                                        <span className="ml-2 text-sm">{amenity.label}</span>
                                      </div>
                                    ) : null;
                                  })}
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-3 gap-4 mb-6">
                            {activeRoom.images.slice(1).map((img, index) => (
                              <div key={index} className="h-32">
                                <img 
                                  src={img} 
                                  alt={`${activeRoom.name} view ${index + 1}`}
                                  className="w-full h-full object-cover rounded-lg"
                                />
                              </div>
                            ))}
                          </div>
                          
                          <div className="flex justify-end">
                            <Button variant="luxury" size="lg">
                              Book This Room
                            </Button>
                          </div>
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
                  
                <Link
  to={`/booking?room=${encodeURIComponent(room.name)}&price=${room.price}`}
>
  <Button variant="luxury">Book Now</Button>
</Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-luxury-brown text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">What Our Guests Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The Presidential Suite exceeded all expectations. The views were breathtaking and the service impeccable.",
                author: "Emma Thompson",
                stay: "Stayed in Presidential Suite"
              },
              {
                quote: "Our Deluxe King Room was the perfect romantic getaway. Attention to detail was remarkable.",
                author: "James Wilson",
                stay: "Stayed in Deluxe King Room"
              },
              {
                quote: "The Executive Suite offered the perfect blend of luxury and comfort. Will definitely return.",
                author: "Sophia Martinez",
                stay: "Stayed in Executive Suite"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-luxury-gold/10 border-luxury-gold/20 text-white">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="fill-luxury-gold text-luxury-gold w-5 h-5" />
                    ))}
                  </div>
                  <p className="italic mb-4">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-luxury-gold">{testimonial.stay}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="text-center">
              <Award className="w-12 h-12 text-luxury-gold mx-auto mb-2" />
              <h3 className="font-serif font-bold">5-Star Luxury</h3>
              <p className="text-sm text-gray-600">Awarded 2023</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-luxury-gold mx-auto mb-2" />
              <h3 className="font-serif font-bold">Safe & Secure</h3>
              <p className="text-sm text-gray-600">24/7 Security</p>
            </div>
            <div className="text-center">
              <Heart className="w-12 h-12 text-luxury-gold mx-auto mb-2" />
              <h3 className="font-serif font-bold">Guest Favorite</h3>
              <p className="text-sm text-gray-600">Since 2018</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-luxury-gold mx-auto mb-2" />
              <h3 className="font-serif font-bold">Exceptional Service</h3>
              <p className="text-sm text-gray-600">Staff Excellence Award</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Booking Bar */}
      <div className="sticky bottom-0 bg-white shadow-lg z-50 py-3 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-2 md:mb-0">
            <span className="font-semibold">Ready to experience luxury?</span>
            <span className="text-luxury-gold font-bold ml-2">From $199/night</span>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="hidden md:block">
              Check Availability
            </Button>
            <Button variant="luxury">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Rooms;