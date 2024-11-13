import useUserPopupStore from "@/app/useStore";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { getUser, updateUser } from "@/services/api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const UserProfileUpdate = () => {
  const updatePopupOpen = useUserPopupStore((state) => state.updatePopupOpen);
  const router = useRouter();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser();
      setUser(user);
    };
    fetchUser();
  }, []);
  console.log(user);
  const [isOpen, setIsOpen] = useState(true);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", initalValues.name);
      formData.append("first_name", initalValues.first_name);
      formData.append("last_name", initalValues.last_name);
      formData.append("email", initalValues.email);
      formData.append("image", initalValues.image);
      formData.append("address", initalValues.address);
      formData.append("contact_no", initalValues.contact_no);
      formData.append("date_of_birth", initalValues.date_of_birth);
      formData.append("gender", initalValues.gender);
      formData.append("_method", initalValues._method);

      const response = await updateUser(formData);
      console.log("User updated successfully:", response);
      // router.push("/");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setInitialValues({
      ...initalValues,
      [name]: value,
      ...(files && { image: files[0] }),
    });
  };
  return (
    <div>
      <Dialog
        className="modalopen"
        open={isOpen}
        onOpenChange={(e) => {
          setIsOpen(false);
          updatePopupOpen(false);
        }}
      >
        {/* <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger> */}
        <DialogContent className="w-auto max-w-full">
          <div className="infoHeadding">Personal Information</div>
          {/* <div className=""> */}
          <form onSubmit={handleSubmit}>
            <div className="flex items-center justify-between gap-3">
              <div className="grid w-full mb-4 max-w-sm items-center gap-1.5">
                <Label htmlFor="fullname">Full Name</Label>
                <Input
                  name="name"
                  type="text"
                  id="fullname"
                  placeholder="Full Name"
                  value={initalValues.name}
                  // defaultValue={registrationData.name || ""}
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
                  value={user?.data.first_name || initalValues.first_name}
                  // defaultValue={registrationData.first_name || ""}
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
                  value={user?.data.last_name || initalValues.last_name}
                  // defaultValue={registrationData.last_name || ""}
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
                  value={user?.data.email || initalValues.email}
                  // defaultValue={registrationData.email || ""}
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
                  // defaultValue={registrationData.address || ""}
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
                  value={user?.data.contact_no || initalValues.contact_no}

                  // defaultValue={registrationData.contact_no || ""}
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
                  // value="2024-07-08"
                  value={user?.data.date_of_birth || initalValues.date_of_birth}
                  min="2000-01-01"
                  max="2024-12-31"
                  // defaultValue={registrationData.date_of_birth || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <RadioGroup
                  name="gender"
                  // value={formData.gender || comfortable}
                  // defaultValue="comfortable"
                  // value={user?.data.gender && initalValues.gender}
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
                  // value={user?.data.image || initalValues.image}
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
                  value={user?.data.password || initalValues.password}
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
                  value={user?.data.new_password || initalValues.new_password}
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
                  value={
                    user?.data.confirm_password || initalValues.confirm_password
                  }
                />
              </div>
            </div>
            <div className="flex justify-between">
              <Button
                onClick={(e) => {
                  setIsOpen(false);
                  updatePopupOpen(false);
                }}
              >
                {" "}
                Skip
              </Button>
              <Button> Update</Button>
            </div>
          </form>
          {/* </div> */}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UserProfileUpdate;
