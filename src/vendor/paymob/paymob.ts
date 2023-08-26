import { AxiosInstance } from "axios"
import { axiosInstance } from "../../utils"

export interface Frames extends Methods {}
export interface Integrations extends Methods {}

type Order = {
    delivery_needed?: "false" | "true",
    amount_cents:string
    currency:"EGP"
    items:Items[]
    shippingData?:shippingData
    shippingDetails?:shippingDetails
}

type Items = {
    name:string,
    amount_cents:string,
    description:string
    quantity:string
}
type shippingData = {
    first_name: string 
    last_name:string
    apartment: string 
    email: string 
    floor: string
    street: string 
    building: string 
    phone_number: string 
    postal_code: string 
    extra_description?: string
    city: string 
    country:string 
    state:string
}
type shippingDetails = {
    notes: string
    number_of_packages:number
    weight:number
    weight_unit:"Kilogram" | "gram"
    length: number
    width:number
    height:number
    contents:string    
}
interface Methods {
    card?:string
    Kisok?:string
    mobile?:string
    valu?:string
    cash?:string
    bank?:string
    premium_card?:string
    souhoola?:string
    get_go?:string
    sympl?:string
    forsa?:string
    nowPay?:string
}

const paymobURLs={
    auth: 'https://accept.paymob.com/api/auth/tokens',
    order: 'https://accept.paymob.com/api/ecommerce/orders'
}


export class Paymob {
    private api_key:string
    private frameID:Frames
    private IntegrationID:Integrations
    private httpClient: AxiosInstance = axiosInstance
    // values that we will get and use
    private token:string
    public orderId:number

    constructor(api_key:string, frameID:Frames, integrationID:Integrations){
        this.api_key = api_key
        this.IntegrationID = integrationID
        this.frameID = frameID
        this.token=''
        this.initiate();
    }

    private async initiate(){
        const payload = {
            api_key:this.api_key
        }
        try{
            const {data} = await this.httpClient.post(paymobURLs.auth,payload)
            this.token = data.token;
        }
        catch(err){
            // to be done using the error class
        }
    }
    /** 
        * Put snippets here to help the dev know what we have
    */
    public async order(order:Order, ){
        
    }
    /** 
        * Put snippets here to help the dev know what we have
    */
    public async pay(){

    }
    /** 
        * Put snippets here to help the dev know what we have
    */
    public async transaction(){

    }
}