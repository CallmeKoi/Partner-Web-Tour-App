// export class Tour{
//     constructor(
//     public Id: string, 
//     public PartnerId: string,
//     public Name: string,
//     public Location: string,
//     public Contact: string,
//     public Description: string,
//     public Highlights: string[],
//     public MainImageUrl: string,
//     public SubimageUrl: string[],
//     public Itinerary: string[],
//     public State: string,
//     public ServicePrice: number,
//     public Additional: string
//     ){} 
// }

import { PacketTour } from "./packetTour.model";

//Testing Tour
export class Tour{
    constructor(
        public Id: string,
        public Name: string,
        public ImageUrl: string,
        public ForSale: boolean,
        public Packets: PacketTour[] | null
    ){}
}

