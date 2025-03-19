import React from 'react'

import coachOne from '../assets/images/pb-male-ic.png';
import coachTwo from '../assets/images/pb-female-ic.png';

import { Card, CardHeader, CardTitle, CardBody, CardImage } from '@progress/kendo-react-layout';
import { Typography } from '@progress/kendo-react-common';


export default function Coaches() {
  return (
    
    <>
    <div className='m-[20px]'>
        <Typography.h4>In need of a coach?</Typography.h4>
        <p>Want to work with a coach to work on some new technique? Our highly skilled
            coaches can help you.
        </p>
        </div>
    <div className='gap-5 flex m-[20px]'>
    <div style={{
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    gap: '20px',
    alignItems: 'center',
    width: '100%',
    padding: '20px'
  }}>
    
        <Card 
        orientation="horizontal" 
        style={{
            width: 350,
            borderColor: 'black',
            minHeight: 275
    }}>
            <CardImage src={coachOne} />
                <div className="k-vbox">
                        <CardHeader>
                            <CardTitle><Typography.h5>Bob Madison</Typography.h5></CardTitle>
                           
                        </CardHeader>
                        <CardBody>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies sagittis justo fringilla vehicula. 
                            Morbi egestas elit ac ex auctor, sed ultrices ligula ultrices. 
                                 </p>
                        </CardBody>
            
                    </div>
                </Card>

                <Card 
        orientation="horizontal" 
        style={{
            width: 350,
            borderColor: 'black',
            minHeight: 275
    }}>
            <CardImage src={coachTwo} />
                <div className="k-vbox">
                        <CardHeader>
                            <CardTitle><Typography.h5>Kate Deela</Typography.h5></CardTitle>
                           
                        </CardHeader>
                        <CardBody>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies sagittis justo fringilla vehicula. 
                            Morbi egestas elit ac ex auctor, sed ultrices ligula ultrices. 
                                 </p>
                        </CardBody>
                    
                    </div>
                </Card>

</div>    
    </div>
    </>
  )
}

