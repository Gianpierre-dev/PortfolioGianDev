'use client';

import { ReactNode, forwardRef } from 'react';
import { motion } from 'framer-motion';

interface GridProps {
  children: ReactNode;
  columns?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: number;
  masonry?: boolean;
  animate?: boolean;
  className?: string;
}

interface GridItemProps {
  children: ReactNode;
  span?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  className?: string;
}

const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ children, columns = {}, gap = 6, masonry = false, animate = true, className = '' }, ref) => {
    const defaultColumns = {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4,
      xl: 5,
      ...columns
    };

    const gridClasses = masonry
      ? `columns-${defaultColumns.xs} sm:columns-${defaultColumns.sm} md:columns-${defaultColumns.md} lg:columns-${defaultColumns.lg} xl:columns-${defaultColumns.xl} gap-${gap}`
      : `grid grid-cols-${defaultColumns.xs} sm:grid-cols-${defaultColumns.sm} md:grid-cols-${defaultColumns.md} lg:grid-cols-${defaultColumns.lg} xl:grid-cols-${defaultColumns.xl} gap-${gap}`;

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2
        }
      }
    };

    if (animate) {
      return (
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={`${gridClasses} ${className}`}
        >
          {children}
        </motion.div>
      );
    }

    return (
      <div
        ref={ref}
        className={`${gridClasses} ${className}`}
      >
        {children}
      </div>
    );
  }
);

Grid.displayName = 'Grid';

const GridItem = forwardRef<HTMLDivElement, GridItemProps>(
  ({ children, span = {}, className = '' }, ref) => {
    const spanClasses = Object.entries(span)
      .map(([breakpoint, value]) => {
        if (breakpoint === 'xs') return `col-span-${value}`;
        return `${breakpoint}:col-span-${value}`;
      })
      .join(' ');

    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          ease: 'easeOut'
        }
      }
    };

    return (
      <motion.div
        ref={ref}
        variants={itemVariants}
        className={`${spanClasses} ${className}`}
      >
        {children}
      </motion.div>
    );
  }
);

GridItem.displayName = 'GridItem';

// Auto-fit grid for dynamic column sizing
interface AutoGridProps {
  children: ReactNode;
  minItemWidth?: number;
  maxItemWidth?: number;
  gap?: number;
  animate?: boolean;
  className?: string;
}

const AutoGrid = forwardRef<HTMLDivElement, AutoGridProps>(
  ({ children, minItemWidth = 280, maxItemWidth = 400, gap = 24, animate = true, className = '' }, ref) => {
    const gridStyle = {
      display: 'grid',
      gridTemplateColumns: `repeat(auto-fit, minmax(${minItemWidth}px, ${maxItemWidth}px))`,
      gap: `${gap}px`,
      justifyContent: 'center'
    };

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2
        }
      }
    };

    if (animate) {
      return (
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={gridStyle}
          className={className}
        >
          {children}
        </motion.div>
      );
    }

    return (
      <div
        ref={ref}
        style={gridStyle}
        className={className}
      >
        {children}
      </div>
    );
  }
);

AutoGrid.displayName = 'AutoGrid';

// Masonry grid for Pinterest-like layout
interface MasonryGridProps {
  children: ReactNode;
  columns?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: number;
  animate?: boolean;
  className?: string;
}

const MasonryGrid = forwardRef<HTMLDivElement, MasonryGridProps>(
  ({ children, columns = {}, gap = 6, animate = true, className = '' }, ref) => {
    const defaultColumns = {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4,
      xl: 5,
      ...columns
    };

    const masonryClasses = `columns-${defaultColumns.xs} sm:columns-${defaultColumns.sm} md:columns-${defaultColumns.md} lg:columns-${defaultColumns.lg} xl:columns-${defaultColumns.xl} gap-${gap}`;

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2
        }
      }
    };

    if (animate) {
      return (
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={`${masonryClasses} ${className}`}
        >
          {children}
        </motion.div>
      );
    }

    return (
      <div
        ref={ref}
        className={`${masonryClasses} ${className}`}
      >
        {children}
      </div>
    );
  }
);

MasonryGrid.displayName = 'MasonryGrid';

export { Grid, GridItem, AutoGrid, MasonryGrid }; 