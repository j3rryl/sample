import MembersCard from "@/Components/MembersCard";
import HeaderLayout from "@/Layouts/HeaderLayout";
import { Head } from "@inertiajs/react";
import { Card, CardBody } from "@nextui-org/react";

export default function Members() {
    return (
        <HeaderLayout>
            <Head title="Members" />
            <Card className="mx-5 my-5">
                <CardBody>
                    <MembersCard />
                </CardBody>
            </Card>
        </HeaderLayout>
    );
}
