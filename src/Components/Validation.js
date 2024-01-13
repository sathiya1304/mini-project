export const Validation =(value, name)=>{
    const pattern= /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if(name === 'email')
    {
        if(value.length<1)
        {
            return{
                error: true,
                errorMessage: 'email is required'
            }
        }
        else if(!pattern.test(value.toLowerCase())){
            return{
                error: true,
                errorMessage: 'enter valid email id'
            }
        }
        else{
            return{
                error: false,
                errorMessage:''
            }
        }
    }
    else{
        if(value.length<1)
        {
            return{
                error: true,
                errorMessage: 'password is required'
            }
        }
        else if(value.length<6)
        {
            return{
                error: true,
                errorMessage: 'Aleast 6 digit is must'
            }
            
        }
        else{
            return{
                error: false,
                errorMessage:''
            }
        }
        
    }
}