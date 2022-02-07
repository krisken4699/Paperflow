import React from 'react'
import Layout from '../components/layout';
import Seo from '../components/seo'

export default function IndexPage() {
    return (
        <Layout>
            <Seo title="Home"/>
            {/* <div className='grid pt-4 h-screen w-full mx-0 static grid-cols-2'>
                <div className='grid pr-6 border-r border-EDEDED grid-cols-2 gap-6'>
                    <div>
                        <img src="https://media.matchesfashion.com/prehome/aw21/mens-category-designers.jpg?width=500&quality=65" alt="" />
                    </div>
                </div>
            </div> */}
            <div className='grid pt-4 h-screen gap-2 lg:gap-5 w-full mx-0 static grid-cols-4'>
                <div>
                    <img className='object-cover aspect-4/5' src="https://kelmond.com/wp-content/uploads/2021/03/portrait-4x5-1.svg" alt="" />
                </div>
                <div>
                    <img className='object-cover aspect-4/5' src="https://webstyle.unicomm.fsu.edu/3.4/img/placeholders/ratio-pref-4-5.png" alt="" />
                </div>
                <div>
                    <img className='object-cover aspect-4/5' src="https://webstyle.unicomm.fsu.edu/3.4/img/placeholders/ratio-pref-4-5.png" alt="" />
                </div>
                <div>
                    <img className='object-cover aspect-4/5' src="https://webstyle.unicomm.fsu.edu/3.4/img/placeholders/ratio-pref-4-5.png" alt="" />
                </div>
            </div>
        </Layout>
    )
}
