'use client';

import { usePathname } from "next/navigation";
import { motion, AnimatePresence, Spring } from "framer-motion";
import { PropsWithChildren } from "react";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useContext, useRef } from "react";
import LogoLight from "./svg/logo-light";

function FrozenRouter(props: PropsWithChildren<{}>) {
    const context = useContext(LayoutRouterContext);
    const frozen = useRef(context).current;

    return (
        <LayoutRouterContext.Provider value={frozen}>
            {props.children}
        </LayoutRouterContext.Provider>
    );
}

const AnimatePageTransition = (props: PropsWithChildren<{}>) => {

    const pathname = usePathname();

    const transitionSpringPhysics: Spring = {
        type: "spring",
        mass: 0.2,
        stiffness: 80,
        damping: 10,
    };

    return <AnimatePresence initial={true} mode="wait">
        <motion.div key={pathname}>
            <motion.div
                className="page-transition-screen"
                transition={transitionSpringPhysics}
                animate={{ height: "0vh" }}
                exit={{ height: "100vh" }}
            >
                <LogoLight />
            </motion.div>

            <motion.div
                className="page-transition-screen"
                transition={transitionSpringPhysics}
                initial={{ height: "100vh" }}
                animate={{ height: "0vh", transition: { delay: 0.2 } }}
            >
                <LogoLight />
            </motion.div>

            <FrozenRouter>
                {props.children}
            </FrozenRouter>

        </motion.div>
    </AnimatePresence>
};

export default AnimatePageTransition;