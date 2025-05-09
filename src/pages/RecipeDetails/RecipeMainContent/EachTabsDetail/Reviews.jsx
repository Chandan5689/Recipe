import React from "react";
import { FaChevronDown, FaStar, FaStarHalfStroke } from "react-icons/fa6";
import Avatar from '../../../../assets/avatar.png'
function Reviews() {
  const reviews = [
    {
      id: 1,
      user: "Emily Johnson",
      rating: 5,
      date: "March 15, 2025",
      comment:
        "This food was absolutely delicious! The flavor was rich and the texture was perfect. Will definitely make again.",
  
    },
    {
      id: 2,
      user: "Michael Chen",
      rating: 4,
      date: "March 10, 2025",
      comment:
        "Great recipe! I added some peas for extra color and it turned out wonderful. The instructions were easy to follow.",
      
    },
    {
      id: 3,
      user: "Sarah Williams",
      rating: 5,
      date: "February 28, 2025",
      comment:
        "Perfect comfort food! The creaminess was spot on and the mushroom flavor was deep and satisfying. My family loved it.",
     
    },
  ];
  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Reviews</h2>
        <button className="bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded whitespace-nowrap transition-colors cursor-pointer">
          Write a Review
        </button>
      </div>
      <div className="mb-8 bg-gray-50 p-6 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-800">Overall Rating</h3>
          <div className="flex items-center">
            <div className="flex text-yellow-400 mr-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfStroke />
            </div>
            <span className="font-medium">4.5 out of 5</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="flex items-center mb-2">
              <div className="w-24 text-sm text-gray-600 flex items-center">
                <FaStar className="text-yellow-400 mr-1" />
                <span>5 stars</span>
              </div>
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full rounded-full w-[75%]"></div>
              </div>
              <span className="ml-2 text-sm text-gray-600">75%</span>
            </div>
            <div className="flex items-center mb-2">
              <div className="w-24 text-sm text-gray-600 flex items-center">
                <FaStar className="text-yellow-400 mr-1" />
                <span>4 stars</span>
              </div>
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full rounded-full w-[20%]"></div>
              </div>
              <span className="ml-2 text-sm text-gray-600">20%</span>
            </div>
            <div className="flex items-center mb-2">
              <div className="w-24 text-sm text-gray-600 flex items-center">
                <FaStar className="text-yellow-400 mr-1" />
                <span>3 stars</span>
              </div>
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full rounded-full w-[5%]"></div>
              </div>
              <span className="ml-2 text-sm text-gray-600">5%</span>
            </div>
            <div className="flex items-center mb-2">
              <div className="w-24 text-sm text-gray-600 flex items-center">
                <FaStar className="text-yellow-400 mr-1" />
                <span>2 stars</span>
              </div>
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full rounded-full w-[0%]"></div>
              </div>
              <span className="ml-2 text-sm text-gray-600">0%</span>
            </div>
            <div className="flex items-center">
              <div className="w-24 text-sm text-gray-600 flex items-center">
                <FaStar className="text-yellow-400 mr-1" />
                <span>1 star</span>
              </div>
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full rounded- w-[0%]"></div>
              </div>
              <span className="ml-2 text-sm text-gray-600">0%</span>
            </div>
          </div>

          <div className="md:w-64 flex flex-col items-center justify-center p-4 bg-white rounded-lg">
            <p className="text-gray-600 mb-2">Based on 28 reviews</p>
            <div className="flex text-yellow-400 text-2xl mb-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfStroke />
            </div>
            <p className="font-bold text-3xl text-gray-800">4.5</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-200 pb-6">
            <div className="flex items-start">
              <img
                src={Avatar}
                alt={review.user}
                className="w-10 h-10 rounded-full mr-4"
              />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-gray-800">{review.user}</h4>
                    <div className="flex text-yellow-400 text-sm mt-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>
                          {review.rating ? <FaStar /> : <FaStarHalf />}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <p className="mt-3 text-gray-700">{review.comment}</p>
              </div>
            </div>
            
          </div>
        ))}
        <div className="mt-6 flex justify-center">
                  <button className="text-emerald-500 hover:text-emerald-600 font-medium flex items-center cursor-pointer">
                    View All Reviews
                    <FaChevronDown className="ml-1 mt-1 "/>
                  </button>
                </div>
      </div>
    </section>
  );
}

export default Reviews;
