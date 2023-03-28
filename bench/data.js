window.BENCHMARK_DATA = {
  "lastUpdate": 1680029309206,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "committer": {
            "email": "jcristharif@gmail.com",
            "name": "Jim Crist-Harif",
            "username": "jcrist"
          },
          "distinct": true,
          "id": "68361df68bf2421a14014ee8cf94ff4118ba695c",
          "message": "refactor(backends): remove deprecated `path` argument of `Backend.connect()`\n\nit affects the `sqlite` and `duckdb` backends\n\nBREAKING CHANGE: `path` argument of `Backend.connect()` is removed, use the `database` argument instead",
          "timestamp": "2023-03-28T13:40:46-05:00",
          "tree_id": "0b5a0d5099881b2a735576afecc4a7e4a8f9416a",
          "url": "https://github.com/ibis-project/ibis/commit/68361df68bf2421a14014ee8cf94ff4118ba695c"
        },
        "date": 1680029222967,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 92.98093781055906,
            "unit": "iter/sec",
            "range": "stddev: 0.011956061501952851",
            "extra": "mean: 10.754892600001703 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 100.40385547371034,
            "unit": "iter/sec",
            "range": "stddev: 0.0006190570824913545",
            "extra": "mean: 9.959776895836825 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 119.88512781946862,
            "unit": "iter/sec",
            "range": "stddev: 0.0006260852396427107",
            "extra": "mean: 8.341318211762427 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 137775.15158548902,
            "unit": "iter/sec",
            "range": "stddev: 4.092682544839511e-7",
            "extra": "mean: 7.258202865264157 usec\nrounds: 26456"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 309.9293386908372,
            "unit": "iter/sec",
            "range": "stddev: 0.00019976380669622492",
            "extra": "mean: 3.2265419086301046 msec\nrounds: 197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 137.38586463213133,
            "unit": "iter/sec",
            "range": "stddev: 0.0000926268385018993",
            "extra": "mean: 7.278769200001989 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 85.94351825062805,
            "unit": "iter/sec",
            "range": "stddev: 0.012837600389536253",
            "extra": "mean: 11.635548792450003 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.202188545168163,
            "unit": "iter/sec",
            "range": "stddev: 0.0007263883116270203",
            "extra": "mean: 65.78000246667368 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 308.17518652029025,
            "unit": "iter/sec",
            "range": "stddev: 0.00023156119281738592",
            "extra": "mean: 3.2449075841937067 msec\nrounds: 291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9185832349201984,
            "unit": "iter/sec",
            "range": "stddev: 0.0039036193261672166",
            "extra": "mean: 1.0886329751999824 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 118.98486620503212,
            "unit": "iter/sec",
            "range": "stddev: 0.0006839744855435794",
            "extra": "mean: 8.404430175824393 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.218427859853358,
            "unit": "iter/sec",
            "range": "stddev: 0.00042604170569628076",
            "extra": "mean: 97.8624122727183 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8504991617512563,
            "unit": "iter/sec",
            "range": "stddev: 0.0023766597599015615",
            "extra": "mean: 1.1757801124000025 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5680.776959865285,
            "unit": "iter/sec",
            "range": "stddev: 0.00004872944134418095",
            "extra": "mean: 176.0322588028019 usec\nrounds: 2755"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 103.83778589846104,
            "unit": "iter/sec",
            "range": "stddev: 0.0006566984582429749",
            "extra": "mean: 9.630405649999716 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5163.075451423554,
            "unit": "iter/sec",
            "range": "stddev: 0.00005027873768803713",
            "extra": "mean: 193.683011106158 usec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.808348376388857,
            "unit": "iter/sec",
            "range": "stddev: 0.0005807848627267663",
            "extra": "mean: 40.309011500005454 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 42.76613900802938,
            "unit": "iter/sec",
            "range": "stddev: 0.0008743334940364133",
            "extra": "mean: 23.382985305553287 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 242.8285972406849,
            "unit": "iter/sec",
            "range": "stddev: 0.009559158183103525",
            "extra": "mean: 4.118131107139857 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5466.105067355909,
            "unit": "iter/sec",
            "range": "stddev: 0.00004349633864289642",
            "extra": "mean: 182.94562356148137 usec\nrounds: 2521"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 103.71094807275905,
            "unit": "iter/sec",
            "range": "stddev: 0.0006115926376307955",
            "extra": "mean: 9.64218357447127 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2525302.006029826,
            "unit": "iter/sec",
            "range": "stddev: 2.1100709485888514e-8",
            "extra": "mean: 395.9922407744548 nsec\nrounds: 92593"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13449.933358852979,
            "unit": "iter/sec",
            "range": "stddev: 0.000002170865636051467",
            "extra": "mean: 74.34981076257769 usec\nrounds: 6151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5851.8400022362675,
            "unit": "iter/sec",
            "range": "stddev: 0.00004194668517742018",
            "extra": "mean: 170.88642198314585 usec\nrounds: 2147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 497023.40724505647,
            "unit": "iter/sec",
            "range": "stddev: 4.605866537513712e-7",
            "extra": "mean: 2.0119776763490576 usec\nrounds: 2195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 51.08071848088972,
            "unit": "iter/sec",
            "range": "stddev: 0.0002717557216749542",
            "extra": "mean: 19.576858543485823 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 351.24972229522007,
            "unit": "iter/sec",
            "range": "stddev: 0.00003673552349314313",
            "extra": "mean: 2.8469773398411835 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 236.71812336741283,
            "unit": "iter/sec",
            "range": "stddev: 0.009556428787674038",
            "extra": "mean: 4.224433624999168 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1191.3254232699067,
            "unit": "iter/sec",
            "range": "stddev: 0.000021679861503913547",
            "extra": "mean: 839.4012084919974 usec\nrounds: 259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 137.57274753463068,
            "unit": "iter/sec",
            "range": "stddev: 0.0000560830864473584",
            "extra": "mean: 7.268881503935027 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6639537978369469,
            "unit": "iter/sec",
            "range": "stddev: 0.0020845797754595503",
            "extra": "mean: 1.5061288951999927 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 105.34048212626304,
            "unit": "iter/sec",
            "range": "stddev: 0.01119164375360294",
            "extra": "mean: 9.493026610618525 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5768.607423084594,
            "unit": "iter/sec",
            "range": "stddev: 0.000057517877368687554",
            "extra": "mean: 173.35206344571793 usec\nrounds: 2774"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 308.0608560444168,
            "unit": "iter/sec",
            "range": "stddev: 0.000214795587635722",
            "extra": "mean: 3.2461118651693224 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 72.19821366887783,
            "unit": "iter/sec",
            "range": "stddev: 0.0001255965771176597",
            "extra": "mean: 13.85075820000607 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 91.30552063261322,
            "unit": "iter/sec",
            "range": "stddev: 0.00024514397241184546",
            "extra": "mean: 10.952240270593366 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 117.02415198710575,
            "unit": "iter/sec",
            "range": "stddev: 0.00021225267610253077",
            "extra": "mean: 8.545244575753769 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9229742145631343,
            "unit": "iter/sec",
            "range": "stddev: 0.003932780705130818",
            "extra": "mean: 1.083453886599989 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5573019.604320885,
            "unit": "iter/sec",
            "range": "stddev: 1.148662539903177e-8",
            "extra": "mean: 179.43593796545503 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 94.32399676727974,
            "unit": "iter/sec",
            "range": "stddev: 0.0007261343022017172",
            "extra": "mean: 10.601756014084554 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 103.42801656491754,
            "unit": "iter/sec",
            "range": "stddev: 0.0007190844528143184",
            "extra": "mean: 9.668560156254577 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5634.525797437804,
            "unit": "iter/sec",
            "range": "stddev: 0.000046220313970674385",
            "extra": "mean: 177.47722451723115 usec\nrounds: 3630"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 38.59777736446024,
            "unit": "iter/sec",
            "range": "stddev: 0.0003140806391129693",
            "extra": "mean: 25.908227578947905 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 90.40256834649931,
            "unit": "iter/sec",
            "range": "stddev: 0.0006915190906462278",
            "extra": "mean: 11.061632631576925 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1744.004925610706,
            "unit": "iter/sec",
            "range": "stddev: 0.000009504525446010965",
            "extra": "mean: 573.3928759689859 usec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 159.3386811073223,
            "unit": "iter/sec",
            "range": "stddev: 0.00014816834538925746",
            "extra": "mean: 6.275939985510811 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 113.50671570240573,
            "unit": "iter/sec",
            "range": "stddev: 0.0005992310995909298",
            "extra": "mean: 8.81005140367043 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 71130.25966632442,
            "unit": "iter/sec",
            "range": "stddev: 5.269896652466335e-7",
            "extra": "mean: 14.058714317802995 usec\nrounds: 13228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 306.43192959313626,
            "unit": "iter/sec",
            "range": "stddev: 0.00010297982852427168",
            "extra": "mean: 3.263367500011327 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 541.8974211894885,
            "unit": "iter/sec",
            "range": "stddev: 0.00005115085256550206",
            "extra": "mean: 1.845367704103401 msec\nrounds: 463"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 756.8263228617224,
            "unit": "iter/sec",
            "range": "stddev: 0.00003424433481886366",
            "extra": "mean: 1.3213071081074268 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 304.3636224680853,
            "unit": "iter/sec",
            "range": "stddev: 0.00023326331854243168",
            "extra": "mean: 3.2855437581239104 msec\nrounds: 277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 93.65703064287098,
            "unit": "iter/sec",
            "range": "stddev: 0.00022964662859425539",
            "extra": "mean: 10.677255013701616 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 160.9444793148472,
            "unit": "iter/sec",
            "range": "stddev: 0.0041804649925899825",
            "extra": "mean: 6.213322782223258 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7382405.705079502,
            "unit": "iter/sec",
            "range": "stddev: 5.154296657962221e-9",
            "extra": "mean: 135.45719917732674 nsec\nrounds: 71429"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 98.66605908872423,
            "unit": "iter/sec",
            "range": "stddev: 0.0006999032529167985",
            "extra": "mean: 10.135197546511536 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 45.73753568857385,
            "unit": "iter/sec",
            "range": "stddev: 0.0003745890525757999",
            "extra": "mean: 21.863880179487236 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11570.445906003362,
            "unit": "iter/sec",
            "range": "stddev: 0.000012613266837993963",
            "extra": "mean: 86.42709262234628 usec\nrounds: 4459"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1781108816352083,
            "unit": "iter/sec",
            "range": "stddev: 0.051373409523561536",
            "extra": "mean: 5.614480097 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 157.65812592721798,
            "unit": "iter/sec",
            "range": "stddev: 0.0113257261774572",
            "extra": "mean: 6.3428383035686 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 97.86005513551846,
            "unit": "iter/sec",
            "range": "stddev: 0.0007377949268554865",
            "extra": "mean: 10.218673989251089 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5577.313676338733,
            "unit": "iter/sec",
            "range": "stddev: 0.000040174052384610374",
            "extra": "mean: 179.29778707667327 usec\nrounds: 1625"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 773502.1160864312,
            "unit": "iter/sec",
            "range": "stddev: 2.1472484008683905e-7",
            "extra": "mean: 1.2928212854278214 usec\nrounds: 22936"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.39150208711527,
            "unit": "iter/sec",
            "range": "stddev: 0.00006755388162742663",
            "extra": "mean: 8.977345499999956 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 54.87644130228906,
            "unit": "iter/sec",
            "range": "stddev: 0.0005347298616369677",
            "extra": "mean: 18.22275600000117 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7438481743056558,
            "unit": "iter/sec",
            "range": "stddev: 0.001173182302145546",
            "extra": "mean: 573.4444172000053 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11858.656973126326,
            "unit": "iter/sec",
            "range": "stddev: 0.000002114793120685966",
            "extra": "mean: 84.32658118589356 usec\nrounds: 5666"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 67.83178136162519,
            "unit": "iter/sec",
            "range": "stddev: 0.00017038728942907872",
            "extra": "mean: 14.742352035085062 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 118.45880304376351,
            "unit": "iter/sec",
            "range": "stddev: 0.0007422717326424442",
            "extra": "mean: 8.441753371681118 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 274.34459991330397,
            "unit": "iter/sec",
            "range": "stddev: 0.0003386829925544734",
            "extra": "mean: 3.645050787644486 msec\nrounds: 259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7959.044520766983,
            "unit": "iter/sec",
            "range": "stddev: 0.00001838774756180861",
            "extra": "mean: 125.64322229769785 usec\nrounds: 4404"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 325.43528019437775,
            "unit": "iter/sec",
            "range": "stddev: 0.000019427493653069894",
            "extra": "mean: 3.072807592965073 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 162.66947620992426,
            "unit": "iter/sec",
            "range": "stddev: 0.00007882014892526423",
            "extra": "mean: 6.147434806450747 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 683.98537663205,
            "unit": "iter/sec",
            "range": "stddev: 0.00002772134815464152",
            "extra": "mean: 1.462019560891797 msec\nrounds: 583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11747950.683292793,
            "unit": "iter/sec",
            "range": "stddev: 4.466709815916319e-9",
            "extra": "mean: 85.1212289664885 nsec\nrounds: 96154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1679096.8124673613,
            "unit": "iter/sec",
            "range": "stddev: 8.633913645144277e-8",
            "extra": "mean: 595.5582742906541 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 283.0057475736917,
            "unit": "iter/sec",
            "range": "stddev: 0.00015042601967299817",
            "extra": "mean: 3.5334971412183442 msec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 119.38815261590499,
            "unit": "iter/sec",
            "range": "stddev: 0.0006907446841223299",
            "extra": "mean: 8.376040487176272 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5609.590287448267,
            "unit": "iter/sec",
            "range": "stddev: 0.00004596401235971726",
            "extra": "mean: 178.26613865856638 usec\nrounds: 2416"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 118.7811484617786,
            "unit": "iter/sec",
            "range": "stddev: 0.0007416917329613684",
            "extra": "mean: 8.4188443448312 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 236.56178078208438,
            "unit": "iter/sec",
            "range": "stddev: 0.004043003077532051",
            "extra": "mean: 4.227225533617277 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1863402.5144413845,
            "unit": "iter/sec",
            "range": "stddev: 1.1862315421204564e-7",
            "extra": "mean: 536.6527050650581 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5910840565452706,
            "unit": "iter/sec",
            "range": "stddev: 0.001382539387224136",
            "extra": "mean: 385.9388496000065 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6410932.330096556,
            "unit": "iter/sec",
            "range": "stddev: 1.0740141217492806e-8",
            "extra": "mean: 155.98355254873618 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.403468967638614,
            "unit": "iter/sec",
            "range": "stddev: 0.00043102085028827767",
            "extra": "mean: 185.06629833334878 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.670872288070726,
            "unit": "iter/sec",
            "range": "stddev: 0.03075594579375975",
            "extra": "mean: 28.034077550002223 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1885015.7883149185,
            "unit": "iter/sec",
            "range": "stddev: 1.2339212776577174e-7",
            "extra": "mean: 530.4995354409922 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5212.412637426428,
            "unit": "iter/sec",
            "range": "stddev: 0.0000911540648162277",
            "extra": "mean: 191.84973822290075 usec\nrounds: 2250"
          }
        ]
      }
    ]
  }
}