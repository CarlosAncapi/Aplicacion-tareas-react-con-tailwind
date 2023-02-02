import { useEffect, useState } from "react";
import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";

const inicialStateDarkMode = localStorage.getItem('theme') === 'dark';

const Header = () => {

    //true es estar en modo dark , false es estar en modo light
    const [darkMode, setDarkMode] = useState(inicialStateDarkMode);

    useEffect(() => {
        if (darkMode){
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme","dark");

        }else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme","light");
        }

    }, [darkMode]);

    return (
        <header className="container mx-auto px-4 pt-8">
            <div className="flex justify-between">
                <h1
                    className="text-3xl font-semibold uppercase tracking-[0.2em]
                        text-white"
                >
                    Tareas
                </h1>
                <button onClick={() =>setDarkMode(!darkMode)}>
                    {
                        darkMode ? <IconSun/> : <IconMoon/>
                    }
                </button>
            </div>
        </header>
    );
};

export default Header;