import Link from 'next/link'
import path from 'path'
import Image from 'next/image'
import neh from '../public/images/logos/neh.jpg';
import gcdi from '../public/images/logos/gcdi.png';
import gc from '../public/images/logos/gc_logo.png';
import DHRIFTLogo from '../public/images/logos/logo.png';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <Link href="/">

                    <Image
                        src={DHRIFTLogo}
                        width={'50'}
                        height={'50'}
                        className="img-fluid" alt='DHRIFT' />

                </Link>
            </div>
            <div className='footer-lower'>
                <div className="funding-text">
                    <p
                        style={{ align: 'center' }}
                    >The Digital Humanities Research Institute is funded through a generous grant from the National Endowment for the Humanities and with support from The Graduate Center&apos;s Provost&apos;s Office.</p>
                </div>
                <div className="funderImages">
                    <div>
                        <a href="http://www.neh.gov/" target="_blank" rel="noreferrer"><Image
                            src={neh}
                            width={'223'}
                            height={'54'}
                            className="img-fluid" alt='NEH' /></a>
                    </div>
                    <div>
                        <a href="https://gcdi.commons.gc.cuny.edu/" target="_blank" rel="noreferrer"><Image
                            src={gcdi}
                            width={'223'}
                            height={'54'}
                            className="img-fluid" alt='GCDI' /></a>
                    </div>
                    <div>
                        <a href="http://www.gc.cuny.edu/" target="_blank" rel="noreferrer"><Image
                            src={gc}
                            width={'223'}
                            height={'54'}
                            className="img-fluid" alt='GC' /></a>
                    </div>
                </div>
            </div>


        </footer>
    )
}