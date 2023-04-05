export const variantOne = {
    hidden: {
        y: '50px',
        opacity: 0
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: .2,
            type: "spring",
            damping: 10,
            stiffness: 50,

        }
    }
}
export const variantTwo= {
    hidden: {
        y: '50px',
        opacity: 0
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: .1,
            delay: .2,
            type: "spring",
            damping: 10,
            stiffness: 50,

        }
    }
}
export const variantThree = {
    hidden: {
        y: '50px',
        opacity: 0
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: .2,
            delay: .4,
            type: "spring",
            damping: 10,
            stiffness: 50,

        }
    }
}
export const variantFour = {
    hidden: {
        y: '50px',
        opacity: 0
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: .2,
            delay: .3,
            type: "spring",
            damping: 10,
            stiffness: 50,

        }
    }
}
export const variantFive= {
    hidden: {
        y: '50px',
        opacity: 0
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: .2,
            delay: .4,
            type: "spring",
            damping: 10,
            stiffness: 50,

        }
    }
}
export const variantSix = {
    hidden: {
        y: '50px',
        opacity: 0
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: .2,
            delay: .5,
            type: "spring",
            damping: 10,
            stiffness: 50,

        }
    }
}
export const openPopUp = {
    hidden: {
        opacity: 0,
        scale: 0,
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: .2,
            type: "spring",
        }
    },
    exit: {
        opacity: 0,
        scale: 0,
    }
}

export const exitAnimation = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        rotate: [0, -10, 90, -90, 0]
    }
}


export const appear1 = {
    hidden: {
        scale: 0,
        opacity: 0,
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: .2,
            type: 'spring',
        }
    }
}
export const appear2 = {
    hidden: {
        scale: 0,
        opacity: 0,
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: .2,
            delay: .1,
            type: 'spring',
        }
    }
}
export const appear3 = {
    hidden: {
        scale: 0,
        opacity: 0,
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: .2,
            delay: .2,
            type: 'spring',
        }
    }
}
export const appear4 = {
    hidden: {
        scale: 0,
        opacity: 0,
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: .2,
            delay: .3,
            type: 'spring',
        }
    }
}
export const appear5 = {
    hidden: {
        scale: 0,
        opacity: 0,
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: .2,
            delay: .4,
            type: 'spring',
        }
    }
}
export const appear6 = {
    hidden: {
        scale: 0,
        opacity: 0,
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: .2,
            delay: .5,
            type: 'spring',
        }
    }
}

export const slide = {
    hidden: {
        x: "-100px",
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            delay: .1,
            type: 'spring',
        }
    }
}