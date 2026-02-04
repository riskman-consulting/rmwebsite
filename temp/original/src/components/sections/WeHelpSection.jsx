import { motion } from "framer-motion";

export default function WeHelpSection({ data }) {
  if (!data) return null;

  return (
    <section className="py-20 bg-bgLight dark:bg-bgDark">
      <div className="container max-w-6xl px-6 mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold md:text-5xl">
            {data.title}
          </h2>
        </motion.div>

        <div className="space-y-12">
          {data.description?.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {idx === 0 && (
                <p className="max-w-5xl mx-auto text-xl text-center">
                  {item.content}
                </p>
              )}

              {idx === 1 && (
                <div className="grid items-center gap-8 md:grid-cols-2">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="shadow-2xl rounded-3xl"
                    />
                  )}

                  <div>
                    <h3 className="mb-6 text-3xl font-bold">
                      {item.title}
                    </h3>
                    <p className="text-lg">{item.content}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
