import clsx from 'clsx'
import React from 'react'


const ItemLayout = ({ children, className }) => {
    return <div className={clsx('custom-bg p-8 rounded-xl flex items-center justify-center space-y-8', className)}>
        {children}
    </div>
}

const AboutDetails = () => {
    return (
        <section className='py-20 w-full'>
            <div className='grid grid-cols-12 gap-8 w-full'>

                <ItemLayout className={'col-span-8 row-span-2 flex-col items-start'}>
                    <h2 className='text-2xl text-left w-full capitalize'>
                        My Journey blah blahblahblah
                    </h2>
                    <p className='font-light'>
                        Talk about journey for a bit Talk about journey for a bit Talk about journey for a bit Talk about journey for a bit Talk about journey for a bit Talk about journey for a bit Talk about journey for a bit Talk about journey for a bit Talk about journey for a bit Talk about journey for a bit Talk about journey for a bit Talk about journey for a bit lk about journey for a bit Talk about journey for a bit Talk about journey for a bit Talk about journey for a bit Talk about journey for a bit Talk about journey for a bit
                    </p>
                </ItemLayout>

                <ItemLayout className={'col-span-4 text-accent'}>
                    <p className='font-semibold w-full text-left text-5xl'>
                        25+ <sub className='font-semibold text-base'>clients</sub>
                    </p>
                </ItemLayout>

                <ItemLayout className={'col-span-4 text-accent'}>

                    <p className='font-semibold w-full text-left text-5xl'>
                        4+ <sub className='font-semibold text-base'>years of experience</sub>
                    </p>
                </ItemLayout>

                <ItemLayout className={"col-span-4 !p-0"}>
                    <img className='w-full h-auto' src='https://github-readme-stats.vercel.app/api/top-langs/?username=brambach&theme=transparent&hide_border=true&title_color=2B999B&text_color=FFFFFF&icon_color=2B999B&text_bold=false' alt='brambach' loading='lazy' />
                </ItemLayout>

                <ItemLayout className={"col-span-8 !p-0"}>
                    <img className='w-full h-auto' src='https://github-readme-stats.vercel.app/api?username=brambach&theme=transparent&hide_border=true&title_color=2B999B&text_color=FFFFFF&icon_color=2B999B&text_bold=false' alt='brambach' loading='lazy' />
                </ItemLayout>

                <ItemLayout className={"col-span-full"}>
                    <img className='w-full h-auto' src='https://skillicons.dev/icons?i=apple,blender,css,discordjs,git,github,html,instagram,java,js,linkedin,nodejs,npm,pr,py,react,tailwind,vscode,windows' alt='brambach' loading='lazy' />
                </ItemLayout>

                <ItemLayout className={"col-span-6 !p-0"}>
                    <img src="https://github-readme-streak-stats.herokuapp.com?user=brambach&theme=dark&hide_border=true&background=EB545400&ring=2B999B&currStreakLabel=2B999B" alt="brambach" loading="lazy"/>
                </ItemLayout>

                {/* <ItemLayout className={"col-span-4 !p-0"}>
                    <img className='w-full h-auto' src='https://github-readme-stats.vercel.app/api/pin/?username=brambach&repo=github-readme-stats&theme=transparent&hide_border=true&title_color=2B999B&text_color=FFFFFF&icon_color=2B999B&text_bold=false' alt='brambach' loading='lazy' />
                </ItemLayout> */}

                

            </div>
        </section>
    )
}

export default AboutDetails