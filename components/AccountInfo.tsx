import React, {FC} from 'react';


type Props = {
    user: string;
    address: string
}

const AccountInfo: FC<Props> = ({user, address}) => {

    return (
        <div className='bg-black rounded-3xl text-white p-5  my-5 w-96'>
            <span> {user} </span>
            <span className="text-xs">{address}</span>
        </div>
    )
}

export default AccountInfo