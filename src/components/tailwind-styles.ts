export const styles = {
  container: "mx-auto w-[calc(100%-2rem)] max-w-[1180px] sm:w-[calc(100%-3rem)]",
  section: "relative px-0 py-20 md:py-28",
  eyebrow:
    "mb-5 flex items-center gap-3 text-[9px] font-semibold tracking-[0.22em] text-urban-slate",
  gradientText:
    "bg-gradient-to-r from-urban-slate via-urban-blush to-urban-slate bg-clip-text text-transparent",
  button:
    "inline-flex min-h-12 items-center justify-center gap-3 border px-5 text-[10px] font-semibold uppercase tracking-[0.09em] transition duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-urban-ivory",
  primaryButton:
    "border-urban-slate bg-gradient-to-r from-urban-midnight to-urban-slate text-urban-ivory shadow-[0_8px_28px_rgba(34,34,59,.16)] hover:shadow-[0_11px_32px_rgba(34,34,59,.24)]",
  secondaryButton:
    "border-urban-slate/30 bg-urban-ivory text-urban-midnight hover:border-urban-slate/70 hover:bg-urban-blush/20",
  link:
    "text-urban-midnight transition-colors hover:text-urban-slate focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-urban-slate",
  header:
    "sticky top-0 z-50 border-b border-urban-blush/40 bg-urban-ivory/95 backdrop-blur-xl",
  nav: "relative mx-auto flex h-[70px] w-[calc(100%-2rem)] max-w-[1180px] items-center justify-between sm:w-[calc(100%-3rem)] md:h-[82px]",
  brand: "inline-flex items-center gap-3 font-display text-base text-urban-midnight",
  brandMark:
    "relative grid size-10 shrink-0 place-items-center overflow-hidden rounded-full bg-urban-ivory",
  navToggle:
    "flex size-11 flex-col items-center justify-center gap-[5px] rounded border border-urban-slate/30 bg-transparent md:hidden",
  navToggleBar: "h-px w-[18px] bg-urban-midnight transition",
  navList:
    "absolute left-0 right-0 top-[69px] z-50 flex flex-col border-b border-urban-blush/40 bg-urban-ivory px-5 pb-5 pt-2 shadow-xl md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 md:shadow-none",
  navLink:
    "block py-3 text-xs font-medium tracking-wide text-urban-slate transition hover:text-urban-midnight md:py-2",
  navCta:
    "inline-flex w-full items-center justify-center gap-2 border border-urban-slate/60 px-4 py-3 text-[10px] font-semibold uppercase tracking-wider text-urban-midnight transition hover:bg-urban-blush/20 md:w-auto md:py-2.5",
  hero:
    "relative flex min-h-[calc(100svh-82px)] items-center overflow-hidden border-b border-urban-blush/50 bg-[radial-gradient(ellipse_at_78%_45%,rgba(201,173,167,.32),transparent_46%)] px-0 py-12 sm:py-16",
  heroGrid:
    "relative z-10 mx-auto grid w-[calc(100%-2rem)] max-w-[1180px] items-center gap-8 sm:w-[calc(100%-3rem)] md:grid-cols-[1.05fr_.95fr] md:gap-10",
  heroCopy: "order-1 py-4 md:order-none md:py-6",
  heroStatus:
    "mb-5 flex items-center gap-3 text-[9px] font-semibold tracking-[0.22em] text-urban-slate",
  statusDot:
    "size-1.5 rounded-full bg-urban-slate shadow-[0_0_12px_rgba(74,78,105,.35)]",
  heroTitle:
    "mb-6 font-display text-[clamp(3.75rem,8.3vw,6.75rem)] font-medium leading-[.99] tracking-[-.045em] text-urban-midnight",
  heroSubtitle: "mb-4 text-sm font-medium tracking-wide text-urban-slate",
  heroDescription:
    "mb-8 max-w-[490px] text-[13px] leading-8 text-urban-slate sm:text-sm",
  heroActions: "flex flex-wrap gap-3",
  heroMeta:
    "mt-8 flex items-center gap-3 text-[10px] tracking-wide text-urban-slate md:mt-11",
  heroVisual:
    "relative order-2 grid min-h-[320px] place-items-center md:order-none md:min-h-[495px]",
  heroArt:
    "relative flex h-[310px] w-[min(310px,86vw)] items-center justify-center overflow-hidden rounded-t-[200px] border border-urban-blush/80 bg-[radial-gradient(ellipse_at_48%_39%,rgba(201,173,167,.42),transparent_49%),linear-gradient(145deg,#F2E9E4,#C9ADA7)] shadow-[0_30px_70px_rgba(34,34,59,.12)] sm:h-[400px] sm:w-[350px] md:h-[465px] md:w-[400px]",
  artIndex:
    "absolute top-8 left-1/2 whitespace-nowrap text-[8px] tracking-[.25em] text-urban-slate -translate-x-1/2 md:top-10",
  artLogo:
    "relative z-10 -mt-5 size-[250px] rounded-full object-cover mix-blend-multiply sm:size-[290px] md:size-[330px]",
  artCaption:
    "absolute bottom-9 z-10 text-center text-[9px] leading-[2.2] tracking-[.2em] text-urban-midnight md:bottom-[52px]",
  artCaptionSmall: "text-[7px] tracking-[.18em] text-urban-slate",
  artSeal: "absolute right-6 top-1/2 text-xl text-urban-slate md:right-9",
  heroIndex:
    "absolute bottom-0 right-0 hidden items-center gap-3 text-[8px] tracking-[.16em] text-urban-slate md:flex",
  scrollCue:
    "absolute bottom-7 right-8 hidden items-center gap-3 text-[8px] tracking-[.18em] text-urban-slate md:flex",
  intro:
    "border-b border-urban-blush/50 bg-urban-blush/25 px-0 py-7 md:py-9",
  introGrid:
    "mx-auto grid w-[calc(100%-2rem)] max-w-[1180px] gap-3 sm:w-[calc(100%-3rem)] md:grid-cols-[.8fr_2fr_auto] md:items-center md:gap-7",
  introTitle: "text-[8px] font-semibold tracking-[.18em] text-urban-slate",
  introText: "font-display text-base leading-relaxed text-urban-midnight",
  sectionHeading:
    "mb-8 flex flex-col gap-4 md:mb-11 md:flex-row md:items-end md:justify-between md:gap-9",
  sectionTitle:
    "font-display text-[clamp(2.45rem,5vw,3.625rem)] font-medium leading-tight tracking-tight text-urban-midnight",
  sectionIntro: "max-w-[390px] text-xs leading-7 text-urban-slate",
  servicesSection:
    "border-y border-urban-blush/50 bg-gradient-to-b from-urban-blush/20 to-urban-ivory",
  serviceGrid: "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4",
  serviceCard:
    "group relative block min-h-[220px] overflow-hidden border border-urban-blush/70 bg-gradient-to-br from-urban-blush/30 to-urban-ivory p-5 transition duration-300 hover:-translate-y-1 hover:border-urban-slate/50 hover:from-urban-blush/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-urban-slate sm:min-h-64 sm:p-6",
  serviceIcon:
    "mb-5 grid size-11 place-items-center rounded-full border border-urban-blush bg-urban-blush/25 text-urban-slate",
  serviceIconSvg: "size-5 fill-none stroke-current stroke-[1.5]",
  cardNumber: "absolute right-5 top-6 text-[10px] tracking-widest text-urban-slate",
  cardTitle: "mb-2 font-display text-lg font-medium text-urban-midnight",
  cardDescription: "text-[11px] leading-5 text-urban-slate",
  cardArrow:
    "absolute bottom-5 right-5 text-sm text-urban-slate transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-urban-midnight",
  portfolioSection: "bg-urban-ivory",
  projectGrid: "grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3",
  projectCard:
    "overflow-hidden border border-urban-blush/70 bg-gradient-to-br from-urban-blush/25 to-urban-ivory",
  projectPreview:
    "relative grid h-[205px] place-items-center overflow-hidden border-b border-urban-blush/50 bg-[radial-gradient(ellipse_at_50%_48%,#C9ADA7,#F2E9E4_68%)]",
  sampleLabel:
    "absolute bottom-2 right-2 z-10 border border-urban-slate/40 bg-urban-ivory/95 px-2 py-1 text-[7px] font-semibold tracking-widest text-urban-slate",
  projectContent: "p-5",
  projectTopline:
    "mb-3 flex items-center justify-between text-[8px] font-semibold tracking-widest text-urban-slate",
  projectStatus:
    "border border-urban-blush bg-urban-blush/25 px-2 py-1 text-[8px] tracking-normal text-urban-slate",
  projectTitle:
    "mb-2 font-display text-lg font-medium text-urban-midnight transition hover:text-urban-slate focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-urban-slate",
  projectDescription: "mb-4 min-h-[3.5rem] text-[11px] leading-5 text-urban-slate",
  chipList: "flex flex-wrap gap-1.5",
  chip:
    "border border-urban-blush/60 bg-urban-ivory px-2 py-1 text-[8px] font-medium text-urban-slate",
  projectActions: "mt-4 flex flex-wrap gap-2 border-t border-urban-blush/60 pt-3",
  projectAction: "min-h-9 px-2.5 text-[8px] tracking-wide",
  note: "mt-6 text-center text-[10px] text-urban-slate",
  faqSection: "border-y border-urban-blush/50 bg-urban-blush/20",
  faqLayout: "grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-24",
  faqHeading: "mb-4 font-display text-[clamp(2.45rem,5vw,3.625rem)] font-medium leading-tight text-urban-midnight",
  faqList: "border-t border-urban-blush/25",
  faqItem: "group border-b border-urban-blush/25",
  faqQuestion:
    "flex w-full cursor-pointer list-none items-center justify-between gap-5 py-5 font-display text-base font-medium text-urban-midnight marker:hidden",
  faqAnswer: "mb-6 mr-7 max-w-[620px] text-[11px] leading-6 text-urban-slate",
  contactSection: "border-y border-urban-blush/50 bg-gradient-to-b from-urban-blush/20 to-urban-ivory",
  contactPanel:
    "grid gap-8 border border-urban-blush/70 bg-[radial-gradient(ellipse_at_0_0,rgba(201,173,167,.35),transparent_50%),#F2E9E4] p-5 sm:p-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-16 lg:p-12",
  contactTitle:
    "mb-5 font-display text-[clamp(2.4rem,4.5vw,3.375rem)] font-medium leading-tight text-urban-midnight",
  contactCopy: "max-w-[380px] text-xs leading-6 text-urban-slate",
  contactDetails: "mt-8",
  detailLabel: "mb-2 block text-[8px] font-semibold tracking-[.18em] text-urban-blush",
  emailLink:
    "inline-flex items-center gap-2 text-xs text-urban-midnight transition hover:text-urban-slate",
  contactForm: "border border-urban-blush/70 bg-urban-blush/20 p-5 sm:p-7",
  formHeading: "mb-5",
  formTitle: "mb-1 font-display text-xl font-medium text-urban-midnight",
  formSubtitle: "text-[10px] text-urban-slate",
  formRow: "grid gap-0 sm:grid-cols-2 sm:gap-3",
  formLabel: "mb-3 grid gap-2 text-[9px] font-medium tracking-wide text-urban-slate",
  formControl:
    "w-full border border-urban-slate/30 bg-urban-ivory px-3 text-[11px] text-urban-midnight outline-none transition placeholder:text-urban-slate/70 focus:border-urban-slate focus:ring-2 focus:ring-urban-blush/40",
  formInput: "h-11",
  formTextarea: "min-h-24 resize-y py-3",
  formNote: "mt-3 text-[8px] leading-4 text-urban-slate",
  formStatus: "mt-2 min-h-4 text-[10px] text-urban-slate",
  detailSection:
    "relative min-h-[80vh] bg-[radial-gradient(ellipse_at_76%_0,rgba(201,173,167,.28),transparent_42%)] px-0 pb-20 pt-12 md:pt-[68px]",
  detailContainer: "mx-auto w-[calc(100%-2rem)] max-w-[940px] sm:w-[calc(100%-3rem)]",
  backLink:
    "mb-10 inline-flex items-center gap-2 text-[10px] font-semibold text-urban-slate transition hover:text-urban-midnight md:mb-14",
  detailHeading: "mb-10 max-w-[740px]",
  detailTitle:
    "mb-4 max-w-[780px] font-display text-[clamp(2.625rem,7vw,4.625rem)] font-medium leading-tight tracking-tight text-urban-midnight",
  detailLead: "mb-3 max-w-[690px] text-base leading-7 text-urban-slate",
  detailDescription: "max-w-[690px] text-sm leading-7 text-urban-slate",
  detailGrid: "grid gap-4 md:grid-cols-2",
  detailPanel:
    "min-h-[240px] border border-urban-blush/70 bg-gradient-to-br from-urban-blush/25 to-urban-ivory p-6 sm:p-7",
  detailPanelTitle: "mb-5 font-display text-2xl font-medium text-urban-midnight",
  learningList: "mt-4 grid gap-3",
  learningItem: "flex items-baseline gap-3 text-[11px] leading-5 text-urban-slate",
  practiceIcon: "absolute right-6 top-6 text-xl text-urban-slate",
  practicePanel:
    "relative min-h-[240px] overflow-hidden border border-urban-blush/70 bg-[radial-gradient(ellipse_at_100%_0,rgba(201,173,167,.4),transparent_54%),linear-gradient(145deg,#F2E9E4,#C9ADA7)] p-6 sm:p-7",
  practiceText: "text-[11px] leading-6 text-urban-slate",
  practiceNote: "mt-4 text-[9px] text-urban-slate",
  detailFooter:
    "mt-7 flex flex-col items-start justify-between gap-4 border-b border-urban-blush/60 py-6 sm:flex-row sm:items-center",
  otherServices: "pt-6",
  otherServiceList: "flex flex-wrap gap-2",
  otherServiceLink:
    "inline-flex items-center gap-2 border border-urban-blush px-3 py-2 text-[10px] text-urban-slate transition hover:border-urban-slate/50 hover:bg-urban-blush/20",
  projectBrief:
    "border border-urban-blush/70 bg-gradient-to-br from-urban-blush/25 to-urban-ivory p-6 sm:p-7",
  sourceStatus:
    "mt-4 flex flex-col items-start justify-between gap-5 border border-urban-blush/70 bg-[radial-gradient(ellipse_at_0_0,rgba(201,173,167,.4),transparent_52%),linear-gradient(145deg,#F2E9E4,#C9ADA7)] p-6 sm:p-7 lg:flex-row lg:items-center",
  sourceCopy: "max-w-[570px]",
  detailActions: "mt-6 flex flex-wrap items-center gap-5",
  footer: "border-t border-urban-blush/50 bg-urban-ivory",
  footerGrid:
    "mx-auto grid w-[calc(100%-2rem)] max-w-[1180px] grid-cols-2 gap-7 py-8 sm:w-[calc(100%-3rem)] md:grid-cols-[1.2fr_1fr_.7fr] md:gap-10 md:py-11",
  footerBrand: "text-sm",
  footerCopy: "mt-3 max-w-[280px] text-[10px] leading-5 text-urban-slate",
  footerLinks: "flex flex-wrap gap-x-5 gap-y-3",
  footerLink: "text-[9px] tracking-wide text-urban-slate transition hover:text-urban-midnight",
  footerEmail:
    "inline-flex items-center gap-2 text-[10px] text-urban-midnight transition hover:text-urban-slate",
  footerBottom:
    "mx-auto flex min-h-[53px] w-[calc(100%-2rem)] max-w-[1180px] items-center justify-between gap-4 border-t border-urban-blush/50 sm:w-[calc(100%-3rem)]",
  copyright: "text-[9px] text-urban-slate",
  topLink: "text-[9px] tracking-wide text-urban-slate hover:text-urban-midnight"
} as const;
