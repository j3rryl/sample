import { Footer } from "@/Components/Footer";
import ImageCarousel from "@/Components/ImageCarousel";
import Header from "@/Components/ResponsiveNavbar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Avatar, Button, Card, CardBody } from "@nextui-org/react";
import { useState } from "react";

export default function Dashboard({ auth }) {
    const [me, setMe] = useState(false);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <ImageCarousel />
            <Card className="mx-5">
                <CardBody>
                    <p>Welcome to AfriNaC</p>
                    <p className="text-sm">
                        {`The Kenya Women Parliamentary Association (KEWOPA) is a
                        cross party caucus bringing on board all women
                        parliamentarians drawn from both houses (National
                        Assembly and Senate). The caucus works to promote and
                        protect democracy and advocate for women's rights.`}
                    </p>
                </CardBody>
            </Card>
            <Card className="mx-5 my-5">
                <CardBody>
                    <p>Blogs</p>
                </CardBody>
            </Card>
            <Card className="mx-5 my-5">
                <CardBody>
                    <p>Follow us on Social Media</p>
                </CardBody>
            </Card>
            <Card className="mx-5 my-5">
                <CardBody>
                    <p>Follow us on Social Media</p>
                </CardBody>
            </Card>
            <Card className="mx-5 my-5">
                <CardBody>
                    <p>Follow us on Social Media</p>
                </CardBody>
            </Card>
            <Card className="mx-5 my-5">
                <CardBody>
                    <p>Follow us on Social Media</p>
                </CardBody>
            </Card>
            <Card className="mx-5 my-5">
                <CardBody>
                    <p>Follow us on Social Media</p>
                </CardBody>
            </Card>
            <Card className="mx-5 my-5">
                <CardBody>
                    <p>Follow us on Social Media</p>
                </CardBody>
            </Card>
            <Card className="mx-5 my-5">
                <CardBody>
                    <p>Follow us on Social Media</p>
                </CardBody>
            </Card>
            <Card className="mx-5 my-5">
                <CardBody>
                    <p>Follow us on Social Media</p>
                </CardBody>
            </Card>
            <Card className="mx-5 my-5">
                <CardBody>
                    <p>Follow us on Social Media</p>
                </CardBody>
            </Card>
            <Card className="mx-5 my-5">
                <CardBody>
                    <p>Follow us on Social Media</p>
                </CardBody>
            </Card>
            <Card className="mx-5 my-5">
                <CardBody>
                    <p>Follow us on Social Media</p>
                </CardBody>
            </Card>
            <Card className="mx-5 my-5">
                <CardBody>
                    <p>Follow us on Social Media</p>
                </CardBody>
            </Card>
            <Card className="mx-5 my-5">
                <CardBody>
                    <p>Follow us on Social Media</p>
                </CardBody>
            </Card>
            <Card className="mx-5 my-5">
                <CardBody>
                    <p>Follow us on Social Media</p>
                </CardBody>
            </Card>
        </AuthenticatedLayout>
    );
}
