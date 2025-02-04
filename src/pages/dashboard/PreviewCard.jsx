import PropTypes from "prop-types";

export function PreviewCard({cardData}) {
    const cardStyles ={
        gridArea: `${cardData.y} / ${cardData.x} / ${cardData.rows} / ${cardData.cols}`,
        backgroundColor: "white",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        borderRadius: "5px",
        padding: "10px",

    }


    return (
        <div style={cardStyles}>
            <h3>{cardData.title}</h3>
            <p>{cardData.content}</p>
        </div>
    );
}

PreviewCard.propTypes = {
    cardData: PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            rows: PropTypes.number.isRequired,
            cols: PropTypes.number.isRequired,
            x: PropTypes.number.isRequired,
            y: PropTypes.number.isRequired
        })
}