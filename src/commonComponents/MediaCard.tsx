const MediaCard: React.FC<{ icon: any; title: string; children: React.ReactNode; cta?: React.ReactNode; imageSrc?: string; imageAlt?: string; btnStatus?: boolean }> = ({ icon, title, children, cta, imageSrc, imageAlt, btnStatus }) => (
    <div className="bg-white rounded-lg shadow-lg flex flex-col overflow-hidden group">
        {imageSrc && (
            <img
                src={imageSrc}
                alt={imageAlt || title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
        )}
        <div className="p-8 flex flex-col flex-grow">
            <div className="flex items-center space-x-4">
                {/* {icon} */}
                <div className="text-mw-gold flex-shrink-0 mt-1 bw_plan_icon_container">
                    <img src={icon} alt="" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-mw-green">{title}</h3>
            </div>
            <div className="mt-4 text-mw-green/80 flex-grow leading-relaxed">
                {children}
            </div>
            {btnStatus && cta && <div className="mt-6">{cta}</div>}
        </div>
    </div>
);
export default MediaCard;