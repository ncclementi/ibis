window.BENCHMARK_DATA = {
  "lastUpdate": 1677100256668,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "63f985521588935ab4b1e66f0015b68b7753cc73",
          "message": "chore: remove dead code",
          "timestamp": "2023-02-22T16:05:29-05:00",
          "tree_id": "58ee2bd3976af1401061e2b254646a836a857d0a",
          "url": "https://github.com/ibis-project/ibis/commit/63f985521588935ab4b1e66f0015b68b7753cc73"
        },
        "date": 1677100180704,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 104.12570582273226,
            "unit": "iter/sec",
            "range": "stddev: 0.00008410541942808159",
            "extra": "mean: 9.603776436362791 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 273.51792378482384,
            "unit": "iter/sec",
            "range": "stddev: 0.000023530349443873255",
            "extra": "mean: 3.656067529916974 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.400319275388954,
            "unit": "iter/sec",
            "range": "stddev: 0.00011188330012687379",
            "extra": "mean: 74.62508761538253 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 937.5477623920546,
            "unit": "iter/sec",
            "range": "stddev: 0.000011539896646552402",
            "extra": "mean: 1.0666123264468204 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 110.56389262718963,
            "unit": "iter/sec",
            "range": "stddev: 0.000611177830984547",
            "extra": "mean: 9.04454407526967 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3379.331436532728,
            "unit": "iter/sec",
            "range": "stddev: 0.000052012629858566266",
            "extra": "mean: 295.916520406777 usec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9368.647667758076,
            "unit": "iter/sec",
            "range": "stddev: 0.00002164916679022734",
            "extra": "mean: 106.7389910970257 usec\nrounds: 3819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.830480513733119,
            "unit": "iter/sec",
            "range": "stddev: 0.01234877985078263",
            "extra": "mean: 1.204122172000001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.727750765420816,
            "unit": "iter/sec",
            "range": "stddev: 0.003960408821418798",
            "extra": "mean: 1.3740968028000053 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 525.7639693014623,
            "unit": "iter/sec",
            "range": "stddev: 0.00007787995276668576",
            "extra": "mean: 1.9019941616170746 msec\nrounds: 396"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6443.70624953075,
            "unit": "iter/sec",
            "range": "stddev: 0.000014916246250005553",
            "extra": "mean: 155.19019043936444 usec\nrounds: 3870"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 111.16186014613895,
            "unit": "iter/sec",
            "range": "stddev: 0.0005700751177320754",
            "extra": "mean: 8.995891204819259 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 168.8279522671183,
            "unit": "iter/sec",
            "range": "stddev: 0.0000683428245507272",
            "extra": "mean: 5.923189771429601 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 244.6128806569649,
            "unit": "iter/sec",
            "range": "stddev: 0.00027621096072080184",
            "extra": "mean: 4.0880921614359265 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5798039437609059,
            "unit": "iter/sec",
            "range": "stddev: 0.013007439911344378",
            "extra": "mean: 1.7247209350000048 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 220.28811524922563,
            "unit": "iter/sec",
            "range": "stddev: 0.00043539480096156186",
            "extra": "mean: 4.539509536720299 msec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 95.45617168063032,
            "unit": "iter/sec",
            "range": "stddev: 0.00012907370866950934",
            "extra": "mean: 10.476011999996402 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3606.0958248239162,
            "unit": "iter/sec",
            "range": "stddev: 0.000052378235108473704",
            "extra": "mean: 277.3082160257983 usec\nrounds: 2134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1536614.4724018574,
            "unit": "iter/sec",
            "range": "stddev: 1.1327895133882332e-7",
            "extra": "mean: 650.7813234616461 nsec\nrounds: 151516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 235.05427804685334,
            "unit": "iter/sec",
            "range": "stddev: 0.0002912770891820086",
            "extra": "mean: 4.254336523076045 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4447677.478424681,
            "unit": "iter/sec",
            "range": "stddev: 1.166960911193618e-8",
            "extra": "mean: 224.8364466286909 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 82.51540511044001,
            "unit": "iter/sec",
            "range": "stddev: 0.00036563839632102374",
            "extra": "mean: 12.118949166662674 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11088244.717847085,
            "unit": "iter/sec",
            "range": "stddev: 3.6722767758404828e-9",
            "extra": "mean: 90.185599745225 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 75.97656194570773,
            "unit": "iter/sec",
            "range": "stddev: 0.0007388102044103717",
            "extra": "mean: 13.161953823530373 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.884479094760788,
            "unit": "iter/sec",
            "range": "stddev: 0.00047201832344426263",
            "extra": "mean: 204.73012180001433 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 100.95152463166848,
            "unit": "iter/sec",
            "range": "stddev: 0.0007021809614786764",
            "extra": "mean: 9.905744402064236 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3447.8425549035974,
            "unit": "iter/sec",
            "range": "stddev: 0.00005631832930142203",
            "extra": "mean: 290.0364457123421 usec\nrounds: 2717"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4210098.488789728,
            "unit": "iter/sec",
            "range": "stddev: 1.2860022759384437e-8",
            "extra": "mean: 237.52413456932672 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8363207293817423,
            "unit": "iter/sec",
            "range": "stddev: 0.009842227296952083",
            "extra": "mean: 1.1957135162000099 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5527044452177199,
            "unit": "iter/sec",
            "range": "stddev: 0.0016768533787424999",
            "extra": "mean: 644.037571399997 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5499081.875180763,
            "unit": "iter/sec",
            "range": "stddev: 5.079318969496061e-9",
            "extra": "mean: 181.8485381193644 nsec\nrounds: 54642"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 243.01996318371627,
            "unit": "iter/sec",
            "range": "stddev: 0.00021660514078357762",
            "extra": "mean: 4.114888286951259 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.123158081792987,
            "unit": "iter/sec",
            "range": "stddev: 0.000773651839528389",
            "extra": "mean: 41.4539421666665 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 81.902450377441,
            "unit": "iter/sec",
            "range": "stddev: 0.0007180825305900474",
            "extra": "mean: 12.209646907895657 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4047.687359058084,
            "unit": "iter/sec",
            "range": "stddev: 0.00005094971470575334",
            "extra": "mean: 247.05465400191005 usec\nrounds: 1974"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 66.59266507243747,
            "unit": "iter/sec",
            "range": "stddev: 0.000593465070754167",
            "extra": "mean: 15.016668861536484 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 250.9592994942807,
            "unit": "iter/sec",
            "range": "stddev: 0.00021052179456905636",
            "extra": "mean: 3.9847098793116835 msec\nrounds: 174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 70.24717040592184,
            "unit": "iter/sec",
            "range": "stddev: 0.018107481593488916",
            "extra": "mean: 14.235448833334077 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4002.645300675318,
            "unit": "iter/sec",
            "range": "stddev: 0.00005215878580372872",
            "extra": "mean: 249.8347779732773 usec\nrounds: 2279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 586.3507853790511,
            "unit": "iter/sec",
            "range": "stddev: 0.00008511509941160964",
            "extra": "mean: 1.7054637342278685 msec\nrounds: 523"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1516604.8642730764,
            "unit": "iter/sec",
            "range": "stddev: 9.568676029667794e-8",
            "extra": "mean: 659.3675277965759 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 241.28045779006513,
            "unit": "iter/sec",
            "range": "stddev: 0.0003794038490491402",
            "extra": "mean: 4.144554470590761 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 32.86360041016483,
            "unit": "iter/sec",
            "range": "stddev: 0.0007180986971714503",
            "extra": "mean: 30.428802307695307 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 114.19183117735896,
            "unit": "iter/sec",
            "range": "stddev: 0.00033909227060079084",
            "extra": "mean: 8.757193835054919 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 389812.7847167278,
            "unit": "iter/sec",
            "range": "stddev: 4.302342703100623e-7",
            "extra": "mean: 2.565334024964543 usec\nrounds: 1925"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 409.3793021668859,
            "unit": "iter/sec",
            "range": "stddev: 0.00010897623930691795",
            "extra": "mean: 2.4427224207645555 msec\nrounds: 366"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 153.73313625932818,
            "unit": "iter/sec",
            "range": "stddev: 0.000054541173971248206",
            "extra": "mean: 6.5047785034003835 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.1828742662309493,
            "unit": "iter/sec",
            "range": "stddev: 0.005370020480449514",
            "extra": "mean: 458.11158960000284 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 97.13573735853687,
            "unit": "iter/sec",
            "range": "stddev: 0.0001261502266805683",
            "extra": "mean: 10.294872177774373 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 82.76131035437352,
            "unit": "iter/sec",
            "range": "stddev: 0.0005863117566643031",
            "extra": "mean: 12.082940636368923 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 92.80796824320797,
            "unit": "iter/sec",
            "range": "stddev: 0.016090058128403497",
            "extra": "mean: 10.774936882353135 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 253.070762051591,
            "unit": "iter/sec",
            "range": "stddev: 0.00018386575832405678",
            "extra": "mean: 3.951463977478915 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1697548.7289423645,
            "unit": "iter/sec",
            "range": "stddev: 2.304713913423986e-7",
            "extra": "mean: 589.0847095877106 nsec\nrounds: 140846"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 85.07907140477833,
            "unit": "iter/sec",
            "range": "stddev: 0.0007198769745517844",
            "extra": "mean: 11.753771914626663 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 109.72055546030641,
            "unit": "iter/sec",
            "range": "stddev: 0.000731428317718526",
            "extra": "mean: 9.114062500000465 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 40.20090919375465,
            "unit": "iter/sec",
            "range": "stddev: 0.0003093833252785686",
            "extra": "mean: 24.87505929729951 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 131.68550241399754,
            "unit": "iter/sec",
            "range": "stddev: 0.00004176219588159984",
            "extra": "mean: 7.593850360658265 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 593583.4856042949,
            "unit": "iter/sec",
            "range": "stddev: 1.910033762942263e-7",
            "extra": "mean: 1.684682987738371 usec\nrounds: 24753"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 58981.13226751658,
            "unit": "iter/sec",
            "range": "stddev: 4.595078551447494e-7",
            "extra": "mean: 16.954574480943673 usec\nrounds: 13245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10684.024096608751,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016905070524640704",
            "extra": "mean: 93.59769230747179 usec\nrounds: 4199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4044.3472673327565,
            "unit": "iter/sec",
            "range": "stddev: 0.0000250739955121795",
            "extra": "mean: 247.25868821336383 usec\nrounds: 1841"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 87.94319162826953,
            "unit": "iter/sec",
            "range": "stddev: 0.00027356279965884964",
            "extra": "mean: 11.370976894117495 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 250.00708021117464,
            "unit": "iter/sec",
            "range": "stddev: 0.00018910017915093027",
            "extra": "mean: 3.999886719829396 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 122504.18566364798,
            "unit": "iter/sec",
            "range": "stddev: 3.016651661231427e-7",
            "extra": "mean: 8.162986387629537 usec\nrounds: 34013"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 53.59521717103701,
            "unit": "iter/sec",
            "range": "stddev: 0.0008262325407388948",
            "extra": "mean: 18.65838134042309 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4066.0617845516795,
            "unit": "iter/sec",
            "range": "stddev: 0.00005100221092473594",
            "extra": "mean: 245.93822056500287 usec\nrounds: 1877"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 103.86426509514098,
            "unit": "iter/sec",
            "range": "stddev: 0.000644504455350964",
            "extra": "mean: 9.62795047058762 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 40.45900266501358,
            "unit": "iter/sec",
            "range": "stddev: 0.0009324066641099469",
            "extra": "mean: 24.716377916669156 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 30.534729336137982,
            "unit": "iter/sec",
            "range": "stddev: 0.027364634171541807",
            "extra": "mean: 32.74959437143252 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 87.00727198292512,
            "unit": "iter/sec",
            "range": "stddev: 0.0006286225331522576",
            "extra": "mean: 11.493292195119583 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1486956.5234958557,
            "unit": "iter/sec",
            "range": "stddev: 1.1271839449941557e-7",
            "extra": "mean: 672.5146190885163 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.991319878693746,
            "unit": "iter/sec",
            "range": "stddev: 0.0008697881374052145",
            "extra": "mean: 111.21837655555409 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.13392545265872513,
            "unit": "iter/sec",
            "range": "stddev: 0.06902874567410223",
            "extra": "mean: 7.466840545599984 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 61.881791899274894,
            "unit": "iter/sec",
            "range": "stddev: 0.0004902494356288828",
            "extra": "mean: 16.159842326927148 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1435.7486152817378,
            "unit": "iter/sec",
            "range": "stddev: 0.000011504108434474372",
            "extra": "mean: 696.5007588071185 usec\nrounds: 1107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 264.99936820269585,
            "unit": "iter/sec",
            "range": "stddev: 0.00018183093197970208",
            "extra": "mean: 3.7735939024394507 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 86.9472317964542,
            "unit": "iter/sec",
            "range": "stddev: 0.0006619132184211214",
            "extra": "mean: 11.501228726189083 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 149.8305678481408,
            "unit": "iter/sec",
            "range": "stddev: 0.00009598781361196055",
            "extra": "mean: 6.674205499998769 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3868.412767650094,
            "unit": "iter/sec",
            "range": "stddev: 0.000048733436069887735",
            "extra": "mean: 258.50395499740324 usec\nrounds: 1911"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 109.3486419676631,
            "unit": "iter/sec",
            "range": "stddev: 0.0006322508359776974",
            "extra": "mean: 9.145060990293075 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 64.4498083358285,
            "unit": "iter/sec",
            "range": "stddev: 0.00020302334481780334",
            "extra": "mean: 15.515949943393188 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10715.328013163404,
            "unit": "iter/sec",
            "range": "stddev: 0.000001931594627825688",
            "extra": "mean: 93.3242546351857 usec\nrounds: 5879"
          }
        ]
      }
    ]
  }
}