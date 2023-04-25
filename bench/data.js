window.BENCHMARK_DATA = {
  "lastUpdate": 1682430690375,
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
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "41bacf2a53e351a2935a6aad8967fa102104c743",
          "message": "fix(polars): ensure that `to_pyarrow` is called from the backend",
          "timestamp": "2023-04-25T15:42:57+02:00",
          "tree_id": "7bb034c6990a4723c825d591f3310d2e1d8cbe60",
          "url": "https://github.com/ibis-project/ibis/commit/41bacf2a53e351a2935a6aad8967fa102104c743"
        },
        "date": 1682430594774,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 357.81564309042705,
            "unit": "iter/sec",
            "range": "stddev: 0.0001849604277605066",
            "extra": "mean: 2.794735275861822 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 87.80988728478953,
            "unit": "iter/sec",
            "range": "stddev: 0.0010710280505599268",
            "extra": "mean: 11.388239194030039 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 854565.6193323218,
            "unit": "iter/sec",
            "range": "stddev: 0.00000430134200209456",
            "extra": "mean: 1.1701851529918874 usec\nrounds: 99010"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4703573.725999949,
            "unit": "iter/sec",
            "range": "stddev: 2.136175372493509e-7",
            "extra": "mean: 212.6043001034101 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1032.4230832538963,
            "unit": "iter/sec",
            "range": "stddev: 0.00005963035340219209",
            "extra": "mean: 968.595158535483 usec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5912995.377550392,
            "unit": "iter/sec",
            "range": "stddev: 3.408199484965019e-8",
            "extra": "mean: 169.1190227878794 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1405970.733071805,
            "unit": "iter/sec",
            "range": "stddev: 2.3793317474097837e-7",
            "extra": "mean: 711.2523585858515 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 610.510680416592,
            "unit": "iter/sec",
            "range": "stddev: 0.000092513865240564",
            "extra": "mean: 1.6379729824179876 msec\nrounds: 455"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 116.10299808021449,
            "unit": "iter/sec",
            "range": "stddev: 0.0001424426706594324",
            "extra": "mean: 8.613042010414832 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 111.72097824220576,
            "unit": "iter/sec",
            "range": "stddev: 0.00021219634580857283",
            "extra": "mean: 8.950870424997959 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 44.77790811332838,
            "unit": "iter/sec",
            "range": "stddev: 0.00043716132397936177",
            "extra": "mean: 22.332441200002034 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 142.75990588041964,
            "unit": "iter/sec",
            "range": "stddev: 0.00015747168763376597",
            "extra": "mean: 7.004767857143536 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 93.3628038965,
            "unit": "iter/sec",
            "range": "stddev: 0.0008198576873331183",
            "extra": "mean: 10.710903681819351 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1927.1488343576736,
            "unit": "iter/sec",
            "range": "stddev: 0.00010949404691578044",
            "extra": "mean: 518.901281609266 usec\nrounds: 1392"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14953681746586958,
            "unit": "iter/sec",
            "range": "stddev: 0.10103128496036451",
            "extra": "mean: 6.687316320799999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.452242195887954,
            "unit": "iter/sec",
            "range": "stddev: 0.0036433080653406054",
            "extra": "mean: 688.5903761999998 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 229.83334903200463,
            "unit": "iter/sec",
            "range": "stddev: 0.00041028964608077963",
            "extra": "mean: 4.350978673076502 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.2037534621905557,
            "unit": "iter/sec",
            "range": "stddev: 0.011645794365517229",
            "extra": "mean: 830.7348900000079 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1913.8391856245846,
            "unit": "iter/sec",
            "range": "stddev: 0.00010215141710259487",
            "extra": "mean: 522.5099410187112 usec\nrounds: 1119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 26.96025301123073,
            "unit": "iter/sec",
            "range": "stddev: 0.0004468653952962155",
            "extra": "mean: 37.09164003703651 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 170.14430864482404,
            "unit": "iter/sec",
            "range": "stddev: 0.00016311229711968195",
            "extra": "mean: 5.877363797618988 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7662503947032425,
            "unit": "iter/sec",
            "range": "stddev: 0.006297623192361448",
            "extra": "mean: 1.305056423999997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 88.084346833525,
            "unit": "iter/sec",
            "range": "stddev: 0.0009177188453982359",
            "extra": "mean: 11.352754898551382 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3882418.714226116,
            "unit": "iter/sec",
            "range": "stddev: 5.1588069596224874e-8",
            "extra": "mean: 257.5713939190788 nsec\nrounds: 129871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 92.05719915727289,
            "unit": "iter/sec",
            "range": "stddev: 0.00031577434768124225",
            "extra": "mean: 10.862811481930645 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 22.417952200472524,
            "unit": "iter/sec",
            "range": "stddev: 0.0009340340936043013",
            "extra": "mean: 44.6071073333327 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.157675908417605,
            "unit": "iter/sec",
            "range": "stddev: 0.004149654917457829",
            "extra": "mean: 463.46163300000853 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7515.580288053599,
            "unit": "iter/sec",
            "range": "stddev: 0.000021498190628578867",
            "extra": "mean: 133.05692463821472 usec\nrounds: 3251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 79.00316789817303,
            "unit": "iter/sec",
            "range": "stddev: 0.016403929176867345",
            "extra": "mean: 12.657720273811009 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 465.3754592432589,
            "unit": "iter/sec",
            "range": "stddev: 0.00006485400998757336",
            "extra": "mean: 2.148802606880232 msec\nrounds: 407"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 252.43259570402998,
            "unit": "iter/sec",
            "range": "stddev: 0.0002984518277534382",
            "extra": "mean: 3.96145354054225 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 87.49288853621431,
            "unit": "iter/sec",
            "range": "stddev: 0.0009762097876500717",
            "extra": "mean: 11.429500348317893 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 89.15574014509792,
            "unit": "iter/sec",
            "range": "stddev: 0.000930657403905711",
            "extra": "mean: 11.216327724637068 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1674190.6200337312,
            "unit": "iter/sec",
            "range": "stddev: 3.378242174943844e-7",
            "extra": "mean: 597.3035495682399 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 277.410619062568,
            "unit": "iter/sec",
            "range": "stddev: 0.00018944728676074664",
            "extra": "mean: 3.604764674759826 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 128.31612338353506,
            "unit": "iter/sec",
            "range": "stddev: 0.005436609981605127",
            "extra": "mean: 7.7932528947357165 msec\nrounds: 171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 82.22882486416727,
            "unit": "iter/sec",
            "range": "stddev: 0.0010720459773845442",
            "extra": "mean: 12.16118558974772 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1500.7141398353142,
            "unit": "iter/sec",
            "range": "stddev: 0.00008937774216355732",
            "extra": "mean: 666.3494222222349 usec\nrounds: 1125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 57.521543559655804,
            "unit": "iter/sec",
            "range": "stddev: 0.0007668892278660161",
            "extra": "mean: 17.38479077778739 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1962.5948875151728,
            "unit": "iter/sec",
            "range": "stddev: 0.00010258504176188057",
            "extra": "mean: 509.52950420965016 usec\nrounds: 1307"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 55.477713825668694,
            "unit": "iter/sec",
            "range": "stddev: 0.03799947320817035",
            "extra": "mean: 18.025256108107957 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2317762.188016809,
            "unit": "iter/sec",
            "range": "stddev: 6.492667455190777e-8",
            "extra": "mean: 431.45064889332474 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 35.98930517964943,
            "unit": "iter/sec",
            "range": "stddev: 0.001325146974659518",
            "extra": "mean: 27.786032406245553 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 240.55239936884334,
            "unit": "iter/sec",
            "range": "stddev: 0.0003557856282435335",
            "extra": "mean: 4.157098422729435 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9979516.024573566,
            "unit": "iter/sec",
            "range": "stddev: 1.5366928850534272e-8",
            "extra": "mean: 100.20526020874239 nsec\nrounds: 96154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.763726548055286,
            "unit": "iter/sec",
            "range": "stddev: 0.014155945837179851",
            "extra": "mean: 1.309369174799997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 87.58313050852112,
            "unit": "iter/sec",
            "range": "stddev: 0.0009453348255293615",
            "extra": "mean: 11.41772387209553 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10746.761811332279,
            "unit": "iter/sec",
            "range": "stddev: 0.000036187308278832784",
            "extra": "mean: 93.05128535979246 usec\nrounds: 5239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12426.00613930506,
            "unit": "iter/sec",
            "range": "stddev: 0.000006038459164831408",
            "extra": "mean: 80.47638064791157 usec\nrounds: 6883"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 152.25991484471476,
            "unit": "iter/sec",
            "range": "stddev: 0.00017825953595656112",
            "extra": "mean: 6.56771679545381 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 88.29716537740735,
            "unit": "iter/sec",
            "range": "stddev: 0.0009267450470012013",
            "extra": "mean: 11.32539188235221 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 243.85028300950125,
            "unit": "iter/sec",
            "range": "stddev: 0.00035681575217877664",
            "extra": "mean: 4.100876930132726 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 654.1291985276472,
            "unit": "iter/sec",
            "range": "stddev: 0.00006151093448876943",
            "extra": "mean: 1.5287499812741265 msec\nrounds: 534"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9366.080821992273,
            "unit": "iter/sec",
            "range": "stddev: 0.000006312701976708101",
            "extra": "mean: 106.76824373028296 usec\nrounds: 4107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 92.80521756184504,
            "unit": "iter/sec",
            "range": "stddev: 0.0008528969509401503",
            "extra": "mean: 10.775256243902492 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 16.864964823859925,
            "unit": "iter/sec",
            "range": "stddev: 0.000856289888504241",
            "extra": "mean: 59.29452035294121 msec\nrounds: 17"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 31.305494215397474,
            "unit": "iter/sec",
            "range": "stddev: 0.033457212847618156",
            "extra": "mean: 31.943274657141632 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6833110464033075,
            "unit": "iter/sec",
            "range": "stddev: 0.010185052902366095",
            "extra": "mean: 1.4634623649999867 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 187.5290034850546,
            "unit": "iter/sec",
            "range": "stddev: 0.004801670765802361",
            "extra": "mean: 5.3325084729077465 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148422.80588098586,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012111510632991223",
            "extra": "mean: 6.7375090644887745 usec\nrounds: 34365"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1886.5341875903932,
            "unit": "iter/sec",
            "range": "stddev: 0.00009715248362142769",
            "extra": "mean: 530.072556637453 usec\nrounds: 1130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5144249.987632193,
            "unit": "iter/sec",
            "range": "stddev: 4.193509360354217e-8",
            "extra": "mean: 194.39179713341485 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1857.235193200184,
            "unit": "iter/sec",
            "range": "stddev: 0.00013518262232184555",
            "extra": "mean: 538.4347677996072 usec\nrounds: 1236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 48.89937093914358,
            "unit": "iter/sec",
            "range": "stddev: 0.0007602849455341856",
            "extra": "mean: 20.45016082608759 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4006.5924743666214,
            "unit": "iter/sec",
            "range": "stddev: 0.00002789307146406236",
            "extra": "mean: 249.5886483084567 usec\nrounds: 1834"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 180.91624223705753,
            "unit": "iter/sec",
            "range": "stddev: 0.00016984835559409261",
            "extra": "mean: 5.527419692310896 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 5348241.776976751,
            "unit": "iter/sec",
            "range": "stddev: 4.145641399772067e-8",
            "extra": "mean: 186.97733604804014 nsec\nrounds: 51814"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 249.4976905492363,
            "unit": "iter/sec",
            "range": "stddev: 0.0003094732485143373",
            "extra": "mean: 4.008053131869204 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 140.89986846991548,
            "unit": "iter/sec",
            "range": "stddev: 0.00013185685618067052",
            "extra": "mean: 7.097238704758032 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 252.24094222036067,
            "unit": "iter/sec",
            "range": "stddev: 0.00029555702259150603",
            "extra": "mean: 3.9644634657540574 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 97.7268695466158,
            "unit": "iter/sec",
            "range": "stddev: 0.00029310267955579645",
            "extra": "mean: 10.232600354838942 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 89.13871770728828,
            "unit": "iter/sec",
            "range": "stddev: 0.0008343577237444737",
            "extra": "mean: 11.218469658535785 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 89.19523741219751,
            "unit": "iter/sec",
            "range": "stddev: 0.000860997385919279",
            "extra": "mean: 11.211360931511456 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.81452074902983,
            "unit": "iter/sec",
            "range": "stddev: 0.0010224338631085914",
            "extra": "mean: 27.163194838720067 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 237.3598516447812,
            "unit": "iter/sec",
            "range": "stddev: 0.00044382045166079876",
            "extra": "mean: 4.213012407408062 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 252.66641274267081,
            "unit": "iter/sec",
            "range": "stddev: 0.00031365920740866483",
            "extra": "mean: 3.9577876186434575 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 83.56109359424141,
            "unit": "iter/sec",
            "range": "stddev: 0.0010328489248483431",
            "extra": "mean: 11.967291917645687 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 85.89123249187719,
            "unit": "iter/sec",
            "range": "stddev: 0.0003000388491141609",
            "extra": "mean: 11.642631861110745 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 89.16966181648121,
            "unit": "iter/sec",
            "range": "stddev: 0.0008336013306972036",
            "extra": "mean: 11.21457656818398 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 41.982646695495546,
            "unit": "iter/sec",
            "range": "stddev: 0.0005763071621798327",
            "extra": "mean: 23.81936535000051 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1677424.1283395255,
            "unit": "iter/sec",
            "range": "stddev: 3.23989398611191e-7",
            "extra": "mean: 596.1521496593086 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 7.538515836941948,
            "unit": "iter/sec",
            "range": "stddev: 0.0016052792733096428",
            "extra": "mean: 132.6521057499903 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1896.921904155801,
            "unit": "iter/sec",
            "range": "stddev: 0.00010264935686394989",
            "extra": "mean: 527.1698311929379 usec\nrounds: 1090"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 98.85244611692328,
            "unit": "iter/sec",
            "range": "stddev: 0.00020701981443307376",
            "extra": "mean: 10.116087555559261 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 67.36627687216786,
            "unit": "iter/sec",
            "range": "stddev: 0.022179034510252823",
            "extra": "mean: 14.844222457143783 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 93.51686472922637,
            "unit": "iter/sec",
            "range": "stddev: 0.00026606234910663386",
            "extra": "mean: 10.693258407405471 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1896.2290255495907,
            "unit": "iter/sec",
            "range": "stddev: 0.00010031279891465746",
            "extra": "mean: 527.3624580818589 usec\nrounds: 1157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1843.1528415770865,
            "unit": "iter/sec",
            "range": "stddev: 0.00009996171466493097",
            "extra": "mean: 542.5486033726611 usec\nrounds: 1127"
          }
        ]
      }
    ]
  }
}