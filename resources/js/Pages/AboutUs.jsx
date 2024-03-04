import HeaderLayout from "@/Layouts/HeaderLayout";
import { Head } from "@inertiajs/react";
import { Card, CardBody } from "@nextui-org/react";

export default function AboutUs() {
    return (
        <HeaderLayout>
            <Head title="About Us" />
            <Card className="mx-5 my-5">
                <CardBody>
                    <p className="text-stone-500">About Us</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quia doloremque, neque placeat expedita blanditiis
                        consequuntur nihil eos delectus magnam maiores.
                        Molestias ipsa nisi ullam, ea provident earum! Quia,
                        cupiditate nesciunt?
                    </p>
                </CardBody>
            </Card>
            <Card className="mx-5 my-5">
                <CardBody>
                    <p className="text-stone-500">Mission</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quia doloremque, neque placeat expedita blanditiis
                        consequuntur nihil eos delectus magnam maiores.
                        Molestias ipsa nisi ullam, ea provident earum! Quia,
                        cupiditate nesciunt?
                    </p>
                </CardBody>
            </Card>
            <Card className="mx-5 my-5">
                <CardBody>
                    <p className="text-stone-500">Vision</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quia doloremque, neque placeat expedita blanditiis
                        consequuntur nihil eos delectus magnam maiores.
                        Molestias ipsa nisi ullam, ea provident earum! Quia,
                        cupiditate nesciunt?
                    </p>
                </CardBody>
            </Card>
            <Card className="mx-5 my-5">
                <CardBody>
                    <p className="text-stone-500">History</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quia doloremque, neque placeat expedita blanditiis
                        consequuntur nihil eos delectus magnam maiores.
                        Molestias ipsa nisi ullam, ea provident earum! Quia,
                        cupiditate nesciunt?
                    </p>
                </CardBody>
            </Card>
        </HeaderLayout>
    );
}
