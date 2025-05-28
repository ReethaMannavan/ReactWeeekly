import { useState } from 'react';
import img3 from '../images/weight.PNG';
import img4 from '../images/height.jpg';


const BmiCalculator = () => {
    const [weight, setWeight] = useState('');
    const [weightUnit, setWeightUnit] = useState('kg');
    const [heightUnit, setHeightUnit] = useState('cm');
    const [heightCm, setHeightCm] = useState('');
    const [heightFeet, setHeightFeet] = useState('');
    const [heightInches, setHeightInches] = useState('');
    const [bmi, setBmi] = useState(null);


    

    const calculateBMI = () => {
        let weightKg = weightUnit === 'kg' ? parseFloat(weight) : parseFloat(weight) / 2.20462;
        let heightM;

        if (heightUnit === 'cm') {
            heightM = parseFloat(heightCm) / 100;
        } else {
            const feet = parseFloat(heightFeet);
            const inches = parseFloat(heightInches);
            heightM = (feet * 30.48 + inches * 2.54) / 100;
        }

        if (weightKg && heightM) {
            const calculatedBmi = weightKg / (heightM * heightM);
            setBmi(calculatedBmi.toFixed(1));
        }
    };

    return (
        <div className="bmi-container">
            <h1>BMI Calculator</h1>

            <div className="input-section">
                <div className="input-group">
                    <label>Enter your weight</label>
                    <div className="unit-toggle">
                        <button
                            className={weightUnit === 'kg' ? 'active' : ''}
                            onClick={() => setWeightUnit('kg')}
                        >
                            kg
                        </button>
                        <button
                            className={weightUnit === 'lb' ? 'active' : ''}
                            onClick={() => setWeightUnit('lb')}
                        >
                            lb
                        </button>
                    </div>
                    <div className="image-container">
                        <input
                            type="number"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            placeholder={weightUnit === 'kg' ? 'kg' : 'lb'}
                        />
                        <img
                            src={img3}
                            alt="Weight measurement"
                            className="input-image1"
                        />
                    </div>

                </div>

                <div className="input-group">
                    <label>Enter your height</label>
                    <div className="unit-toggle">
                        <button
                            className={heightUnit === 'cm' ? 'active' : ''}
                            onClick={() => setHeightUnit('cm')}
                        >
                            cm
                        </button>
                        <button
                            className={heightUnit === 'ft' ? 'active' : ''}
                            onClick={() => setHeightUnit('ft')}
                        >
                            ft/in
                        </button>
                    </div>
                    {heightUnit === 'cm' ? (
                        <input
                            type="number"
                            value={heightCm}
                            onChange={(e) => setHeightCm(e.target.value)}
                            placeholder="cm"
                        />
                    ) : (
                        <div className="height-imperial">
                            <input
                                type="number"
                                value={heightFeet}
                                onChange={(e) => setHeightFeet(e.target.value)}
                                placeholder="ft"
                            />
                            <input
                                type="number"
                                value={heightInches}
                                onChange={(e) => setHeightInches(e.target.value)}
                                placeholder="in"
                            />

                        </div>

                    )}
                    <img
                         src={img4}
                        alt="Weight measurement"
                        className="input-image2"
                    />
                </div>



            </div>
            <button className="calculate-btn" onClick={calculateBMI}>
                Go
            </button>
            {bmi && (
                <div className="result-section">
                    <h2>Your BMI: {bmi}</h2>
                    <div className="bmi-scale">
                        <span className={bmi < 18.5 ? 'active' : ''}>Underweight</span>
                        <span className={bmi >= 18.5 && bmi < 25 ? 'active' : ''}>Normal</span>
                        <span className={bmi >= 25 && bmi < 30 ? 'active' : ''}>Overweight</span>
                        <span className={bmi >= 30 ? 'active' : ''}>Obese</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BmiCalculator;