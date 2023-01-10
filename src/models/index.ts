import { Episode } from "./Episode";
import { Course } from "./Course";
import { Category } from "./Category";
import { User } from "./User";

Category.hasMany(Course);

Course.belongsTo(Category);
Course.hasMany(Episode);

Episode.belongsTo(Course);

export { Course, Category, Episode, User };
