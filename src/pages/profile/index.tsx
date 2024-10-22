import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBreadCrumb } from "@/store/slice/app";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Profile = () => {
  const dispatch = useDispatch();

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
                <AvatarImage src="https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/455092502_1804243283437831_8600967763519704709_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFG5zG6nQoPiTOhzwsnXcpJPkrVF6qLh_c-StUXqouH9yOlr_wUqnaZHyYhK0FuesUDw7GY0csrCDpVhxZJoN7y&_nc_ohc=vhOtOpWWBJMQ7kNvgEgBSft&_nc_ht=scontent.fdad3-6.fna&_nc_gid=ApplKXQpLmEMuXUeJRDx2Pq&oh=00_AYA50FtwXRRfpyN0YzwYxoRVgYTUtmzRl2hhDduz5ocYOA&oe=671C4FB8"
                  alt="Võ Đức Minh" />
                <AvatarFallback>VM</AvatarFallback>
              </Avatar>
              <h2 className="text-4xl font-bold tracking-tight mt-4">Võ Đức Minh</h2>
            </CardHeader>
          </Card>
        </div>

        {/* Group Project & Information Section */}
        <div className="w-full md:w-1/2">
          <div className="flex flex-col gap-8 h-full">
            {/* Group Project Card */}
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

            {/* Information Card */}
            <Card className="p-12 shadow-lg rounded-lg transition-shadow duration-300 hover:shadow-xl">
              <CardHeader>
                <h3 className="text-3xl font-bold mb-6">Information</h3>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between mb-4">
                  <p className="text-xl font-semibold">Student ID</p>
                  <p className="text-xl">DE160118</p>
                </div>
                <div className="flex justify-between mb-4">
                  <p className="text-xl font-semibold">Email</p>
                  <p className="text-xl">minhvdde160118@fpt.edu.vn</p>
                </div>
                <div className="flex justify-between mb-4">
                  <p className="text-xl font-semibold">Phone Number</p>
                  <p className="text-xl">0981285582</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-xl font-semibold">Sub Major</p>
                  <p className="text-xl">Node JS</p>
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
