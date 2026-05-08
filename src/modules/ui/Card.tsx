import type { PropsWithChildren, ReactNode } from "react";
import { useTranslation } from "react-i18next";

export function Card({
  title,
  description,
  actions,
  loading = false,
  variant = "default",
  className,
  bodyClassName,
  padding = "default",
  children,
}: PropsWithChildren<{
  title?: string;
  description?: string;
  actions?: ReactNode;
  loading?: boolean;
  variant?: "default" | "glass" | "gradient";
  className?: string;
  bodyClassName?: string;
  padding?: "default" | "compact" | "none";
}>) {
  const { t } = useTranslation();
  const hasHeader = Boolean(title || description || actions);
  const paddingClass = {
    default: "p-5",
    compact: "p-3.5",
    none: "p-0",
  }[padding];
  const variantClass = {
    default: "rounded-2xl border border-black/[0.06] bg-white shadow-[0_1px_2px_rgb(15_23_42_/_0.035)] dark:border-white/[0.06] dark:bg-neutral-950/70 dark:shadow-[0_1px_2px_rgb(0_0_0_/_0.22)]",
    glass: "card-glass",
    gradient: "border-gradient rounded-2xl bg-white shadow-[0_1px_2px_rgb(15_23_42_/_0.035)] dark:bg-neutral-950/70 dark:shadow-[0_1px_2px_rgb(0_0_0_/_0.3)]",
  }[variant];
  const { t } = useTranslation();
  const hasHeader = Boolean(title || description || actions);
  const paddingClass = {
    default: "p-5",
    compact: "p-3.5",
    none: "p-0",
  }[padding];

  return (
    <section
      className={[
        variantClass,
        "motion-reduce:transition-none motion-safe:transition-colors motion-safe:duration-200 motion-safe:ease-out",
        paddingClass,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-busy={loading}
    >
      {hasHeader ? (
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="space-y-1">
            {title ? (
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{title}</h3>
            ) : null}
            {description ? (
              <p className="text-xs text-slate-600 dark:text-white/65">{description}</p>
            ) : null}
          </div>
          {actions ? <div className="shrink-0">{actions}</div> : null}
        </div>
      ) : null}
      <div
        className={[hasHeader ? "mt-4" : null, "min-w-0", bodyClassName].filter(Boolean).join(" ")}
      >
        {children}
      </div>
      {loading ? (
        <div className="absolute inset-0 z-10 flex items-center justify-center rounded-2xl">
          <div className="flex flex-col items-center gap-3 p-6">
            <div className="h-8 w-32 skeleton rounded-lg" />
            <div className="h-4 w-48 skeleton rounded-md" />
            <div className="h-4 w-40 skeleton rounded-md" />
            <div className="h-20 w-full skeleton rounded-xl" />
          </div>
        </div>
      ) : null}
    </section>
  );
}
