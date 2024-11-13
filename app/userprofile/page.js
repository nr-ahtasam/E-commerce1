"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";

const page = () => {
  const [initalValues, setInitialValues] = useState({
    _method: "put",
    name: "",
    first_name: "",
    last_name: "",
    email: "",
    image: "",
    address: "",
    contact_no: "",
    date_of_birth: "",
    gender: "",
  });
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setInitialValues({
      ...initalValues,
      [name]: value,
      ...(files && { image: files[0] }),
    });
  };
  return (
    <div className="bg-[#d46d1d] w-full h-full fixed flex justify-center items-center">
      <div class="container flex justify-center bg-white  w-[100%] m-auto max-w-[1200px]">
        <div className="w-[25%] border-r-2 mr">
          <div className=" ">
            <img
              src="/images/avator1.jpg"
              alt="/images/avator1.jpg"
              className="w-full rounded-[50%]"
            />
          </div>
        </div>
        <div className="w-[50%] border-r-2">
          <div className="infoHeadding">Personal Information</div>

          <form>
            <div className="flex items-center justify-between gap-3">
              <div className="grid w-full mb-4 max-w-sm items-center gap-1.5">
                <Label htmlFor="fullname">Full Name</Label>
                <Input
                  name="name"
                  type="text"
                  id="fullname"
                  placeholder="Full Name"
                  value={initalValues.name}
                  onChange={handleChange}
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="firstname">First Name</Label>
                <Input
                  name="first_name"
                  type="text"
                  id="firstname"
                  placeholder="First Name"
                  //   value={user?.data.first_name || initalValues.first_name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex items-center justify-between gap-3">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="lastname">Last Name</Label>
                <Input
                  name="last_name"
                  type="text"
                  id="lastname"
                  placeholder="Last Name"
                  //   value={user?.data.last_name || initalValues.last_name}

                  onChange={handleChange}
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  name="email"
                  type="email"
                  id="email"
                  placeholder="Email"
                  //   value={user?.data.email || initalValues.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex items-center justify-between gap-3">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="address">Address</Label>
                <Input
                  name="address"
                  type="text"
                  id="address"
                  placeholder="Address"
                  value={initalValues.address}
                  onChange={handleChange}
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="contactnumber">Contact Number</Label>
                <Input
                  name="contact_no"
                  type="text"
                  id="contactnumber"
                  placeholder="Contact Number"
                  onChange={handleChange}
                  //   value={user?.data.contact_no || initalValues.contact_no}
                />
              </div>
            </div>

            <div className="flex items-center justify-between gap-3">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="dob">Date of Birth</Label>
                <Input
                  name="date_of_birth"
                  type="date"
                  id="dob"
                  placeholder="Date of Birth"
                  //   value={user?.data.date_of_birth || initalValues.date_of_birth}
                  min="2000-01-01"
                  max="2024-12-31"
                  onChange={handleChange}
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <RadioGroup
                  name="gender"
                  defaultValue={initalValues.gender || "comfortable"}
                  onChange={handleChange}
                >
                  <Label className="mt-5">Gender</Label>
                  <div className="flex items-center gap-8">
                    <div className="flex items-center space-x-2 ">
                      <RadioGroupItem value="Male" id="r1" />
                      <Label htmlFor="r1" orientation="horizontal">
                        Male
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Female" id="r2" />
                      <Label htmlFor="r2" orientation="horizontal">
                        Female
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Others" id="r3" />
                      <Label htmlFor="r3">Others</Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <div className="flex items-center justify-between gap-3">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="image">Image</Label>
                <Input
                  name="image"
                  onChange={handleChange}
                  type="file"
                  id="image"
                  placeholder="Image"
                />
              </div>
            </div>
            <div className="flex items-center justify-between gap-3">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  name="password"
                  type="password"
                  id="password"
                  placeholder="Password"
                  onChange={handleChange}
                  //   value={user?.data.password || initalValues.password}
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="newpassword">New Password</Label>
                <Input
                  name="new_password"
                  type="password"
                  id="newpassword"
                  placeholder="New Password"
                  onChange={handleChange}
                  //   value={user?.data.new_password || initalValues.new_password}
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="confirmpassword">Confirm Password</Label>
                <Input
                  name="confirm_password"
                  type="password"
                  id="confirmpassword"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  //   value={
                  //     user?.data.confirm_password || initalValues.confirm_password
                  //   }
                />
              </div>
            </div>
            <div className="flex justify-between">
              {/* <Button
                onClick={(e) => {
                  setIsOpen(false);
                  updatePopupOpen(false);
                }}
              >
                {" "}
                Skip
              </Button> */}
              <Button> Update</Button>
            </div>
          </form>
        </div>
        <div className="w-[25%] border-r-2">a</div>
      </div>
    </div>
  );
};

export default page;
