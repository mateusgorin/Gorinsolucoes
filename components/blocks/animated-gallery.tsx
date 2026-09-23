"use client"

import * as React from "react"
import {
  HTMLMotionProps,
  MotionValue,
  Variants,
  motion,
  useScroll,
  useTransform,
} from "framer-motion"
import { cn } from "@/lib/utils"

interface ContainerScrollContextValue {
  scrollYProgress: MotionValue<number>
}

const SPRING_CONFIG = {
  type: "spring",
  stiffness: 100,
  damping: 16,
  mass: 0.75,
  restDelta: 0.005,
  duration: 0.3,
}

const blurVariants: Variants = {
  hidden: {
    filter: "blur(10px)",
    opacity: 0,
  },
  visible: {
    filter: "blur(0px)",
    opacity: 1,
  },
}

const ContainerScrollContext = React.createContext<
  ContainerScrollContextValue | undefined
>(undefined)

function useContainerScrollContext() {
  const context = React.useContext(ContainerScrollContext)
  if (!context) {
    throw new Error(
      "useContainerScrollContext must be used within a ContainerScroll Component"
    )
  }
  return context
}

export const ContainerScroll = ({
  children,
  className,
  style,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const scrollRef = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  })

  return (
    <ContainerScrollContext.Provider value={{ scrollYProgress }}>
      <div
        ref={scrollRef}
        className={cn("relative min-h-[120vh]", className)}
        style={{
          perspective: "1000px",
          perspectiveOrigin: "center top",
          transformStyle: "preserve-3d",
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    </ContainerScrollContext.Provider>
  )
}
ContainerScroll.displayName = "ContainerScroll"

export const ContainerSticky = ({
  children,
  className,
  style,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "sticky left-0 top-0 min-h-[30rem] w-full overflow-hidden flex items-center justify-center",
        className
      )}
      style={{
        perspective: "1000px",
        perspectiveOrigin: "center center",
        transformStyle: "preserve-3d",
        transformOrigin: "50% 50%",
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  )
}
ContainerSticky.displayName = "ContainerSticky"

export const GalleryContainer = ({
  children,
  className,
  style,
  rotateRange = [75, 0],
  scaleRange = [1.2, 1],
  ...props
}: React.HTMLAttributes<HTMLDivElement> & HTMLMotionProps<"div"> & {
  rotateRange?: [number, number];
  scaleRange?: [number, number];
}) => {
  const { scrollYProgress } = useContainerScrollContext()
  const rotateX = useTransform(scrollYProgress, [0, 0.5], rotateRange)
  const scale = useTransform(scrollYProgress, [0.5, 0.9], scaleRange)

  return (
    <motion.div
      className={cn(
        "relative grid size-full grid-cols-3 gap-3 md:gap-4 rounded-2xl max-w-7xl mx-auto px-4 sm:px-6",
        className
      )}
      style={{
        rotateX,
        scale,
        transformStyle: "preserve-3d",
        perspective: "1000px",
        ...style,
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
GalleryContainer.displayName = "GalleryContainer"

export const GalleryCol = ({
  children,
  className,
  style,
  yRange = ["0%", "-10%"],
  inputRange = [0.1, 0.9],
  ...props
}: HTMLMotionProps<"div"> & { yRange?: string[]; inputRange?: number[] }) => {
  const { scrollYProgress } = useContainerScrollContext()
  const y = useTransform(scrollYProgress, inputRange, yRange)

  return (
    <motion.div
      className={cn("relative flex w-full flex-col gap-3 md:gap-4 will-change-transform", className)}
      style={{
        y,
        ...style,
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
GalleryCol.displayName = "GalleryCol"

export const ContainerStagger = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<"div">
>(({ className, viewport, transition, ...props }, ref) => {
  return (
    <motion.div
      className={cn("relative", className)}
      ref={ref}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true || viewport?.once, ...viewport }}
      transition={{
        staggerChildren: transition?.staggerChildren || 0.2,
        ...transition,
      }}
      {...props}
    />
  )
})
ContainerStagger.displayName = "ContainerStagger"

export const ContainerAnimated = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<"div">
>(({ className, transition, ...props }, ref) => {
  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      variants={blurVariants}
      transition={SPRING_CONFIG || transition}
      {...props}
    />
  )
})
ContainerAnimated.displayName = "ContainerAnimated"
