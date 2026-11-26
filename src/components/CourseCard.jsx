import './course-card.css';

function CourseCard({ data }) {
    // حساب المدة الإجمالية بالدقائق
    const totalDuration = data.lessions * data.duration;
    
    // تحويل الدقائق إلى ساعات ودقائق
    const hours = Math.floor(totalDuration / 60);
    const minutes = totalDuration % 60;
    const formattedDuration = hours > 0 
        ? `${hours}h ${minutes}m` 
        : `${minutes}m`;

    return (
        <div className="course-card">
            {/* صورة الكورس */}
            <div className="card-image">
                <img src={data.image || 'https://via.placeholder.com/400x250'} alt={data.title} />
                <div className="card-badge">{data.category || 'Programming'}</div>
            </div>

            {/* محتوى الكارد */}
            <div className="card-content">
                <h2 className="card-title">{data.title}</h2>
                
                {/* معلومات الكورس */}
                <div className="card-info">
                    <div className="info-item">
                        <span className="info-icon">📚</span>
                        <span className="info-label">Lessons:</span>
                        <span className="info-value">{data.lessions}</span>
                    </div>
                    
                    <div className="info-item">
                        <span className="info-icon">⏱️</span>
                        <span className="info-label">Duration:</span>
                        <span className="info-value">{formattedDuration}</span>
                    </div>
                    
                    <div className="info-item">
                        <span className="info-icon">💰</span>
                        <span className="info-label">Price:</span>
                        <span className="info-value price">{data.price} EGP</span>
                    </div>
                </div>

                {/* زر التفاصيل */}
                <button className="card-button">
                    View Details
                    <span className="button-arrow">→</span>
                </button>
            </div>
        </div>
    );
}

export default CourseCard;