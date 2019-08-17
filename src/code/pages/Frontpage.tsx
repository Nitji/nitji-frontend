import * as React from 'react';

interface FrontpageProps {
    header: JSX.Element;
    nav: JSX.Element;
}

export const Frontpage: React.FC<FrontpageProps> = (props) => {
    return (
        <div className="grid_container">
            <div className="top_page">
                <header>
                    {props.header}
                </header>
            </div>

            <div className="introduction_section">
                <nav>
                    {props.nav}
                </nav>
            </div>

            <div className="main_content">
                <main>

                </main>
            </div>

            <div className="end_content">
                <footer>

                </footer>
            </div>
        </div>
    )
};