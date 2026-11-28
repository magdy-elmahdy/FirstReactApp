import './course-card.css';

// استقبال data كـ prop واحد ثم فك خصائصه
function CourseCard( Props) {
    console.log("log Props:", Props);
    const {course} = Props
    console.log("log course:", course)
    
    const { title:courseTitle="UnKown", price=0, lessions=0, duration=0, image, category="UnKown" } = course;

    // حساب المدة الإجمالية بالدقائق
    const totalDuration = lessions * duration;
    
    // تحويل الدقائق إلى ساعات ودقائق
    const hours = Math.floor(totalDuration / 60);
    const minutes = totalDuration % 60;
    const formattedDuration = hours > 0 
        ? `${hours}h ${minutes}m` 
        : `${minutes}m`;

    return (
        <div className="course-card">
            <div className="card-image">
                <img src={image || 'https://via.placeholder.com/400x250'} alt={courseTitle} />
                <div className="card-badge">{category || 'Programming'}</div>
            </div>

            <div className="card-content">
                <h2 className="card-title">{courseTitle}</h2>
                
                <div className="card-info">
                    <div className="info-item">
                        <span className="info-icon">📚</span>
                        <span className="info-label">Lessons:</span>
                        <span className="info-value">{lessions}</span>
                    </div>
                    
                    <div className="info-item">
                        <span className="info-icon">⏱️</span>
                        <span className="info-label">Duration:</span>
                        <span className="info-value">{formattedDuration}</span>
                    </div>
                    
                    <div className="info-item">
                        <span className="info-icon">💰</span>
                        <span className="info-label">Price:</span>
                        <span className="info-value price">{price} EGP</span>
                    </div>
                </div>

                <button className="card-button">
                    View Details
                    <span className="button-arrow">→</span>
                </button>
            </div>
        </div>
    );
}

export default CourseCard;