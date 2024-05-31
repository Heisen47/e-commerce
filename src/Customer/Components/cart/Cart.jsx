import React from "react";
import CartItem from "./CartItem";
import { Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Cart = () => {

  const navigate = useNavigate()
  const handleCheckout = ()=>{
    navigate("/checkout?step=2")
  }

  return (
    <div>
      <div>
        <div className="lg:grid grid-cols-3 lg:px-16 relative">
          <div className="col-span-2">
            {[1,1,1,1].map((item)=><CartItem />)}
          </div>
          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
            <div className="border">
                <p className="uppercase font-bold opacity-60 pb-4">Price details</p>
                <Divider/>

                {/*Right side checkout */}
                <div className="space-y-3 font-semibold mb-10">
                    <div className="flex justify-between pt-3 text-black">
                        <span>Price</span>
                        <span>₹1400</span>
                    </div>
                    <div className="flex justify-between pt-3 text-black">
                        <span>Delivery Charge</span>
                        <span className="text-green-600">Free</span>
                    </div>
                    <div className="flex justify-between pt-3 text-black">
                        <span>Discount</span>
                        <span className="text-green-600">-₹1000</span>
                    </div>
                    <div className="flex justify-between pt-3 text-black">
                        <span>Total Amount</span>
                        <span className="text-green-600">₹400</span>
                    </div>
                </div>

                {/*Add to Cart button */}
                <Button
                  variant="contained"
                  className="w-full"
                  sx={{ px: "2.5rem", py: "0.7rem", bgcolor: "#9155fd" }}
                  onClick={handleCheckout}
                >
                  Checkout
                </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
