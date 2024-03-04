"use client";
import { Card, CardBody } from "@nextui-org/card";
import React from "react";
import { Image } from "@nextui-org/image";
export const partners = [
    {
        id: 1,
        photo: `https://alive-reli.com/assets/zizi-H6fASIGt.png`,
        name: "John Doe",
    },
    {
        id: 2,
        photo: `https://alive-reli.com/assets/luigif-EN1y0xUb.png`,
        name: "Jane Wairimu",
    },
    {
        id: 3,
        photo: `https://alive-reli.com/assets/Uwezo-Uganda-CGrMpNj2.jpg`,
        name: "Ken Kamau",
    },
    {
        id: 4,
        photo: `https://alive-reli.com/assets/MILELE-ZANZIBAR-0wZ_hhcT.png`,
        name: "Milele Zainab",
    },
    {
        id: 5,
        photo: `https://alive-reli.com/assets/STRATHMORE-yXP757zk.png`,
        name: "Sylvester Ouma",
    },
    {
        id: 6,
        photo: `https://alive-reli.com/assets/OCODE-2u7kXOFO.png`,
        name: "Ashley Lughula",
    },

    {
        id: 7,
        photo: `https://alive-reli.com/assets/Uwezo_Tanzania-esBJ4H39.png`,
        name: "Bob Maina",
    },
    {
        id: 8,
        photo: `https://alive-reli.com/assets/UDSM-z9jFqNCD.jpg`,
        name: "Marjorie Njoki",
    },
];
export const funders = [
    {
        id: 1,
        photo: `https://alive-reli.com/assets/echidna-_gipD0YA.jpg`,
        name: "Echidna Giving",
    },
    {
        id: 2,
        photo: `https://alive-reli.com/assets/wellsprings-NOx_a0qs.jpg`,
        name: "Wellspring Philanthropic Fund",
    },
    {
        id: 3,
        photo: `https://alive-reli.com/assets/imaginable-lQJCy6L6.jpg`,
        name: "Imaginable Futures",
    },
    {
        id: 4,
        photo: `https://alive-reli.com/assets/Lego-sfNGTOy2.jpg`,
        name: "The LEGO Foundation",
    },
    {
        id: 5,
        photo: `https://alive-reli.com/assets/porticus-2vmjBoX_.jpg`,
        name: "PORTICUS",
    },
    {
        id: 6,
        photo: `https://alive-reli.com/assets/co-impact-bw9pJeBx.jpg`,
        name: "Co-Impact",
    },
];

const MembersCard = () => {
    return (
        <>
            <h3 className="text-danger m-3">Members</h3>
            <div className="gap-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 mb-8">
                {partners.map((item) => (
                    <Card shadow="sm" key={item.id} isPressable>
                        <CardBody className={`overflow-visible p-5`}>
                            <div className="flex justify-between items-center">
                                <div>
                                    <p
                                        className={`!uppercase text-xs text-danger`}
                                    >
                                        {item.name}
                                    </p>
                                    {/* <p className="text-primary text-sm text-stone-500">{item.position}</p> */}
                                </div>
                                <div
                                    className={`w-10 h-10 flex justify-center items-center rounded-full overflow-hidden text-white`}
                                >
                                    <Image
                                        isBlurred
                                        src={item.photo}
                                        alt="logo"
                                    />
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                ))}
            </div>
            <h3 className="text-danger mx-2">Funders</h3>
            <div className="gap-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6">
                {funders.map((item) => (
                    <Card shadow="sm" key={item.id} isPressable>
                        <CardBody className={`overflow-visible p-5`}>
                            <div className="flex justify-between items-center">
                                <div>
                                    <p
                                        className={`!uppercase text-xs text-danger`}
                                    >
                                        {item.name}
                                    </p>
                                    {/* <p className="text-primary text-sm text-stone-500">{item.position}</p> */}
                                </div>
                                <div
                                    className={`w-10 h-10 flex justify-center items-center rounded-full overflow-hidden text-white`}
                                >
                                    <Image
                                        isBlurred
                                        src={item.photo}
                                        alt="logo"
                                    />
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </>
    );
};

export default MembersCard;
