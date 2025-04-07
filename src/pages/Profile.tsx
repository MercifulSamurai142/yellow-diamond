
import { useState } from "react";
import { UserRound, Mail, Phone, MapPin, Briefcase, GraduationCap, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/layout/Header";

const Profile = () => {
  const [userData] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@yellowdiamond.com",
    phone: "(555) 123-4567",
    location: "San Francisco, CA",
    position: "Sales Representative",
    department: "Consumer Goods Division",
    joinDate: "March 15, 2023",
    education: "Bachelor of Business Administration",
    bio: "Experienced sales professional with a passion for consumer goods and retail excellence. Joined Yellow Diamond to help drive the next generation of FMCG sales strategies and customer relationships.",
    skills: ["Retail Sales", "Negotiation", "Product Knowledge", "Client Relationship", "Market Analysis", "Sales Forecasting"]
  });

  return (
    <div className="space-y-6">
      <Header title="My Profile" subtitle="Manage your personal information and preferences" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Summary Card */}
        <Card className="md:col-span-1">
          <CardHeader className="text-center pb-2">
            <div className="flex justify-center mb-4">
              <div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center text-3xl font-medium text-orange-800">
                {userData.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
            <CardTitle>{userData.name}</CardTitle>
            <p className="text-muted-foreground mt-1">{userData.position}</p>
            <p className="text-sm text-muted-foreground">{userData.department}</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-muted-foreground w-5 h-5" />
                <span className="text-sm">{userData.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-muted-foreground w-5 h-5" />
                <span className="text-sm">{userData.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-muted-foreground w-5 h-5" />
                <span className="text-sm">{userData.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="text-muted-foreground w-5 h-5" />
                <span className="text-sm">Joined {userData.joinDate}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="md:col-span-2 space-y-6">
          {/* About Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">About</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{userData.bio}</p>
            </CardContent>
          </Card>

          {/* Education & Experience */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Education & Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <GraduationCap className="text-muted-foreground w-5 h-5 mt-0.5" />
                <div>
                  <p className="font-medium">{userData.education}</p>
                  <p className="text-sm text-muted-foreground">University of Business Studies</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Briefcase className="text-muted-foreground w-5 h-5 mt-0.5" />
                <div>
                  <p className="font-medium">Previous Role: Senior Sales Associate</p>
                  <p className="text-sm text-muted-foreground">Global Retail Inc. (2020-2023)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {userData.skills.map((skill, index) => (
                  <span key={index} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
