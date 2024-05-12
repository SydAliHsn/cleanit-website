'use client';

import { usePathname } from "next/navigation";
import { motion, AnimatePresence, Spring } from "framer-motion";
import { PropsWithChildren } from "react";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useContext, useRef } from "react";


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

    const transitionColor = "deepskyblue";

    return <AnimatePresence initial={true} mode="wait">
        <motion.div key={pathname}>
            <motion.div
                style={{
                    backgroundColor: transitionColor,
                    position: "fixed",
                    width: "100vw",
                    zIndex: 999999,
                    bottom: 0,
                }}
                transition={transitionSpringPhysics}
                animate={{ height: "0vh" }}
                exit={{ height: "100vh" }}
            />

            <motion.div
                style={{
                    backgroundColor: transitionColor,
                    position: "fixed",
                    width: "100vw",
                    zIndex: 999999,
                    top: 0,
                }}
                transition={transitionSpringPhysics}
                initial={{ height: "100vh" }}
                animate={{ height: "0vh", transition: { delay: 0.2 } }}
            />
            <FrozenRouter>
                {props.children}
            </FrozenRouter>
        </motion.div>
    </AnimatePresence>
};

export default AnimatePageTransition;