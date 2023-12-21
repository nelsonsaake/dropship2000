"use client"
import { useDeviceWidth } from '@/hooks/useDeviceWidth';
import Product from '@/types/Product';
import React from 'react'
import ProductComponent from './ProductComponent';
import split from '@/helpers/split';

const Listing = ({ products, cols }: { products: Product[], cols?: number }) => {

    const { isLaptopMedium, isLaptop, isTablet, isMobileLarge, isMobileMedium } = useDeviceWidth();

    if (!cols) {
        if (isLaptopMedium) {
            cols = 4;
        } else if (isLaptop) {
            cols = 3;
        } else if (isTablet) {
            cols = 3;
        } else if (isMobileLarge) {
            cols = 2;
        } else if (isMobileMedium) {
            cols = 2;
        } else {
            cols = 1;
        }
    }

    const groups: Product[][] = split(products, cols!);

    return <>
        <div className="flex justify-between flex-wrap space-x-3">
            {
                groups.map((products, index) => {
                    return <div key={index} className="flex-1 flex flex-col space-y-3">
                        {
                            products.map((product, index) => {
                                return <div className="" key={index}>
                                    <ProductComponent product={product} />
                                </div>
                            })
                        }
                    </div>
                })
            }
        </div >
    </>
}

export default Listing