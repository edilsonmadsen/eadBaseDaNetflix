import { Favorite } from "./Favorite";
import { Episode } from "./Episode";
import { Course } from "./Course";
import { Category } from "./Category";
import { User } from "./User";

Category.hasMany(Course, { as: "courses" });

Course.belongsTo(Category);
Course.hasMany(Episode, { as: "episodes " });

Course.belongsToMany(User, { through: Favorite });
Course.hasMany(Favorite, { as: "favoritesUsers", foreignKey: "course_id" });

Episode.belongsTo(Course);

Favorite.belongsTo(Course);
Favorite.belongsTo(User);

User.belongsToMany(Course, { through: Favorite });
User.hasMany(Favorite, { as: "favoritesCourses", foreignKey: "user_id" });

export { Course, Category, Episode, User, Favorite };
