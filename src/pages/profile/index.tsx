import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBreadCrumb } from "@/store/slice/app";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { RootState } from "@/store"; // Đảm bảo import đúng đường dẫn

const Profile = () => {
  const dispatch = useDispatch();
  
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  
  useEffect(() => {
    dispatch(
      setBreadCrumb([
        { title: "Home", link: "/" },
        { title: "Profile", link: "/profile" },
      ])
    );
  }, [dispatch]);

  return (
    <div className="flex justify-center items-center min-h-screen p-10">
      <div className="flex flex-col md:flex-row gap-10 max-w-[90%] w-full">
        {/* Avatar & Name Section */}
        <div className="w-full md:w-1/2">
          <Card className="p-12 shadow-lg rounded-lg transition-shadow duration-300 hover:shadow-xl h-full">
            <CardHeader className="flex flex-col items-center">
              <Avatar className="w-48 h-48 mb-6">
                <AvatarImage 
                  src={currentUser?.avatarUrl || "default_avatar_url_here"} // Thay thế bằng đường dẫn avatar mặc định
                  alt={currentUser?.name || "User Avatar"} 
                />
                <AvatarFallback>{currentUser ? currentUser.name.charAt(0) : "U"}</AvatarFallback>
              </Avatar>
              <h2 className="text-4xl font-bold tracking-tight mt-4">{currentUser?.name}</h2>
            </CardHeader>
          </Card>
        </div>

        <div className="w-full md:w-1/2">
          <div className="flex flex-col gap-8 h-full">
            <Card className="p-12 shadow-lg rounded-lg transition-shadow duration-300 hover:shadow-xl">
              <CardHeader>
                <h3 className="text-3xl font-bold mb-6">Group Capstone Project</h3>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between mb-4">
                  <p className="text-xl font-semibold">Name Group</p>
                  <p className="text-xl">Đom Đóm</p>
                </div>
                <div className="flex justify-between mb-4">
                  <p className="text-xl font-semibold">Mentor</p>
                  <p className="text-xl">Trần Văn Hoàng</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-12 shadow-lg rounded-lg transition-shadow duration-300 hover:shadow-xl">
              <CardHeader>
                <h3 className="text-3xl font-bold mb-6">Information</h3>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between mb-4">
                  <p className="text-xl font-semibold">Student ID</p>
                  <p className="text-xl">{currentUser?.code}</p>
                </div>
                <div className="flex justify-between mb-4">
                  <p className="text-xl font-semibold">Email</p>
                  <p className="text-xl">{currentUser?.email}</p>
                </div>
                <div className="flex justify-between mb-4">
                  <p className="text-xl font-semibold">Phone Number</p>
                  <p className="text-xl">{currentUser?.phone_number}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-xl font-semibold">Sub Major</p>
                  <p className="text-xl">Node JS</p> {/* Adjust according to your logic */}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
