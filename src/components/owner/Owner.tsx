import useTypedSelector from "../../hooks/useTypedSelector";
import { OwnerInfo } from "../../types"
import Loader from "../loader/Loader";
import './owner.css'

const Owner = ({ id, firstName, lastName, email, gender, location, phone, dateOfBirth, picture, title, registerDate, updatedDate }: OwnerInfo) => {
    const loading = useTypedSelector((state) => state.owner.loading);
    const error = useTypedSelector((state) => state.owner.error);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <div>Error: {error.error}</div>;
    }

    return (
        <section className="user-profile">
            <div className="user-profile__header">
                <img src={picture} alt={`${firstName} ${lastName} picture`} className="user-profile__picture" />
                <h2 className="user-profile__name">{firstName} {lastName}</h2>
                <p className="user-profile__title">{title}</p>
            </div>

            <div className="user-profile__details">
                <div className="detail-group">
                    <h3 className="detail-group__title">Personal Information</h3>
                    <dl>
                        <div>
                            <dt>Gender</dt>
                            <dd>{gender}</dd>
                        </div>
                        <div>
                            <dt>Date of Birth</dt>
                            <dd>{dateOfBirth}</dd>
                        </div>
                        <div>
                            <dt>Email</dt>
                            <dd>{email}</dd>
                        </div>
                        <div>
                            <dt>Phone</dt>
                            <dd>{phone}</dd>
                        </div>
                    </dl>
                </div>

                <div className="detail-group">
                    <h3 className="detail-group__title">Location</h3>
                    <dl>
                        <div>
                            <dt>Street</dt>
                            <dd>{location.street}</dd>
                        </div>
                        <div>
                            <dt>City</dt>
                            <dd>{location.city}</dd>
                        </div>
                        <div>
                            <dt>State</dt>
                            <dd>{location.state}</dd>
                        </div>
                        <div>
                            <dt>Country</dt>
                            <dd>{location.country}</dd>
                        </div>
                        <div>
                            <dt>Timezone</dt>
                            <dd>{location.timezone}</dd>
                        </div>
                    </dl>
                </div>

                <div className="detail-group">
                    <h3 className="detail-group__title">Account Information</h3>
                    <dl>
                        <div>
                            <dt>User ID</dt>
                            <dd>{id}</dd>
                        </div>
                        <div>
                            <dt>Registered</dt>
                            <dd>{registerDate}</dd>
                        </div>
                        <div>
                            <dt>Last Updated</dt>
                            <dd>{updatedDate}</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </section>
    )
}

export default Owner