window.BENCHMARK_DATA = {
  "lastUpdate": 1681906142500,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "mesejoleon@gmail.com",
            "name": "Daniel Mesejo",
            "username": "mesejo"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "c8af9d49263a1c13e8b91e67c3e5256522264572",
          "message": "feat(sqlite): add argmin and argmax functions",
          "timestamp": "2023-04-19T08:03:47-04:00",
          "tree_id": "49219da17905c4f326a58372e7895ea07d8cb536",
          "url": "https://github.com/ibis-project/ibis/commit/c8af9d49263a1c13e8b91e67c3e5256522264572"
        },
        "date": 1681906054913,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 150.9193971946763,
            "unit": "iter/sec",
            "range": "stddev: 0.00019197038131773034",
            "extra": "mean: 6.626053500002153 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4691.742781531263,
            "unit": "iter/sec",
            "range": "stddev: 0.00002279365830465475",
            "extra": "mean: 213.14041424786421 usec\nrounds: 379"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 112.14616413298248,
            "unit": "iter/sec",
            "range": "stddev: 0.00007019097288718137",
            "extra": "mean: 8.916934499999519 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9346882450006263,
            "unit": "iter/sec",
            "range": "stddev: 0.007062847914915739",
            "extra": "mean: 1.0698754428000001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 101.9172973745404,
            "unit": "iter/sec",
            "range": "stddev: 0.0006855241643127672",
            "extra": "mean: 9.811877137254294 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 89.91726146293632,
            "unit": "iter/sec",
            "range": "stddev: 0.011117646948568103",
            "extra": "mean: 11.121335144444958 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5800280.433267785,
            "unit": "iter/sec",
            "range": "stddev: 2.2451988045480793e-8",
            "extra": "mean: 172.40545720257478 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12022903.115367826,
            "unit": "iter/sec",
            "range": "stddev: 3.8683612804325724e-9",
            "extra": "mean: 83.17458690325199 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 536.4061968772666,
            "unit": "iter/sec",
            "range": "stddev: 0.00028037450626348817",
            "extra": "mean: 1.8642588505158657 msec\nrounds: 194"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 742389.4206962626,
            "unit": "iter/sec",
            "range": "stddev: 1.920467023248964e-7",
            "extra": "mean: 1.3470019535867481 usec\nrounds: 24571"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2355.0781062723713,
            "unit": "iter/sec",
            "range": "stddev: 0.00008336691834680324",
            "extra": "mean: 424.614367284321 usec\nrounds: 648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 101.20715727464244,
            "unit": "iter/sec",
            "range": "stddev: 0.0007527706723184917",
            "extra": "mean: 9.880724119998092 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13501.71195701652,
            "unit": "iter/sec",
            "range": "stddev: 0.000002050894175219988",
            "extra": "mean: 74.064681810985 usec\nrounds: 6251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 94.93380020573389,
            "unit": "iter/sec",
            "range": "stddev: 0.0006973492015438731",
            "extra": "mean: 10.533656061727962 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 40.24813973372456,
            "unit": "iter/sec",
            "range": "stddev: 0.0009072260200519178",
            "extra": "mean: 24.84586881818252 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.221549605143984,
            "unit": "iter/sec",
            "range": "stddev: 0.0005294338808066261",
            "extra": "mean: 17.786774057691666 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 159.11225490782073,
            "unit": "iter/sec",
            "range": "stddev: 0.00007901360281240053",
            "extra": "mean: 6.284871021275733 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 688.8456305758326,
            "unit": "iter/sec",
            "range": "stddev: 0.000022945006786916357",
            "extra": "mean: 1.4517040620030666 msec\nrounds: 629"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2292.386782698812,
            "unit": "iter/sec",
            "range": "stddev: 0.00008005647010895017",
            "extra": "mean: 436.22655982281765 usec\nrounds: 1354"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6663720609736115,
            "unit": "iter/sec",
            "range": "stddev: 0.0020018763565567647",
            "extra": "mean: 600.1060767999974 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.18027996192980034,
            "unit": "iter/sec",
            "range": "stddev: 0.10898507683604018",
            "extra": "mean: 5.546928173799995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 275.78902291434866,
            "unit": "iter/sec",
            "range": "stddev: 0.0002927708037277834",
            "extra": "mean: 3.6259601249994944 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 94.57501006597992,
            "unit": "iter/sec",
            "range": "stddev: 0.0009043659530454452",
            "extra": "mean: 10.573617695650825 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 370.34068578547044,
            "unit": "iter/sec",
            "range": "stddev: 0.0001667272004190658",
            "extra": "mean: 2.70021641796947 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 164.9019958459758,
            "unit": "iter/sec",
            "range": "stddev: 0.00365309530600147",
            "extra": "mean: 6.064207985293488 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 85.78514092664572,
            "unit": "iter/sec",
            "range": "stddev: 0.0008488269175937834",
            "extra": "mean: 11.657030450705829 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 762.9263842763343,
            "unit": "iter/sec",
            "range": "stddev: 0.000015904493904124344",
            "extra": "mean: 1.3107424524956488 msec\nrounds: 621"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.809468229880402,
            "unit": "iter/sec",
            "range": "stddev: 0.00015392450629997216",
            "extra": "mean: 172.13279433332693 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 105.92242137332683,
            "unit": "iter/sec",
            "range": "stddev: 0.0002779100422201071",
            "extra": "mean: 9.440871791209052 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2333.415570466313,
            "unit": "iter/sec",
            "range": "stddev: 0.00008683707038458952",
            "extra": "mean: 428.55632432424306 usec\nrounds: 259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 275.77970245913144,
            "unit": "iter/sec",
            "range": "stddev: 0.0002527053246331798",
            "extra": "mean: 3.6260826706352427 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 101.49504424865326,
            "unit": "iter/sec",
            "range": "stddev: 0.000754786233631193",
            "extra": "mean: 9.852697808083068 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 250.94781097879408,
            "unit": "iter/sec",
            "range": "stddev: 0.00043020112710789735",
            "extra": "mean: 3.984892301310025 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.700335006389498,
            "unit": "iter/sec",
            "range": "stddev: 0.0006627901863502649",
            "extra": "mean: 63.69290843749731 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1178.8173474409982,
            "unit": "iter/sec",
            "range": "stddev: 0.00001328025575671818",
            "extra": "mean: 848.3078418983409 usec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 60.970044042758204,
            "unit": "iter/sec",
            "range": "stddev: 0.0006069031837553256",
            "extra": "mean: 16.401497090910766 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2321.137066818531,
            "unit": "iter/sec",
            "range": "stddev: 0.0000852570704479745",
            "extra": "mean: 430.8233297789049 usec\nrounds: 1219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 190.34799747689704,
            "unit": "iter/sec",
            "range": "stddev: 0.00005023268581726575",
            "extra": "mean: 5.253535699115366 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 7798.942196762746,
            "unit": "iter/sec",
            "range": "stddev: 0.002848917607712108",
            "extra": "mean: 128.22251720433175 usec\nrounds: 4650"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.513097591134821,
            "unit": "iter/sec",
            "range": "stddev: 0.0020328257416573035",
            "extra": "mean: 397.9153072000031 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 141345.83983878043,
            "unit": "iter/sec",
            "range": "stddev: 3.790712376124586e-7",
            "extra": "mean: 7.074845649087399 usec\nrounds: 41153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 98.76723794037596,
            "unit": "iter/sec",
            "range": "stddev: 0.0006614140972243582",
            "extra": "mean: 10.124814876403471 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 267.29841272277895,
            "unit": "iter/sec",
            "range": "stddev: 0.0003074586654845773",
            "extra": "mean: 3.7411370677951687 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 94.39818895725084,
            "unit": "iter/sec",
            "range": "stddev: 0.0007415189693964912",
            "extra": "mean: 10.59342357142953 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1790204.7495198704,
            "unit": "iter/sec",
            "range": "stddev: 1.0030666236163385e-7",
            "extra": "mean: 558.5953228356691 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 99.72405844234339,
            "unit": "iter/sec",
            "range": "stddev: 0.0008799489089427293",
            "extra": "mean: 10.027670510202524 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 94.24052774192934,
            "unit": "iter/sec",
            "range": "stddev: 0.000765157035262773",
            "extra": "mean: 10.611146010752671 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1617037.929429024,
            "unit": "iter/sec",
            "range": "stddev: 1.2045242811308514e-7",
            "extra": "mean: 618.4146839110323 nsec\nrounds: 147059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 92.40309534061241,
            "unit": "iter/sec",
            "range": "stddev: 0.0008927380215360628",
            "extra": "mean: 10.822148287498834 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6422016.555476673,
            "unit": "iter/sec",
            "range": "stddev: 8.218725350849375e-9",
            "extra": "mean: 155.71432919297618 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7873441967538376,
            "unit": "iter/sec",
            "range": "stddev: 0.001788085339155618",
            "extra": "mean: 1.2700925517999964 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 97.34679526632829,
            "unit": "iter/sec",
            "range": "stddev: 0.0001814058957805992",
            "extra": "mean: 10.272551831461211 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.24157033266549,
            "unit": "iter/sec",
            "range": "stddev: 0.00018276174382641816",
            "extra": "mean: 20.729010127659063 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 225.1592201688431,
            "unit": "iter/sec",
            "range": "stddev: 0.004210172646678082",
            "extra": "mean: 4.441301578723344 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9320982001156878,
            "unit": "iter/sec",
            "range": "stddev: 0.005130053588825403",
            "extra": "mean: 1.0728483328000038 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.61331349767613,
            "unit": "iter/sec",
            "range": "stddev: 0.00005426134634213349",
            "extra": "mean: 8.43075680555532 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.71427102836422,
            "unit": "iter/sec",
            "range": "stddev: 0.00011285661251414801",
            "extra": "mean: 13.384323854546665 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.430956740037306,
            "unit": "iter/sec",
            "range": "stddev: 0.00041813044431736915",
            "extra": "mean: 37.83442309090581 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.7141128882550677,
            "unit": "iter/sec",
            "range": "stddev: 0.0018543564353120101",
            "extra": "mean: 1.4003388209999912 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 110.22249382785924,
            "unit": "iter/sec",
            "range": "stddev: 0.0003535975772649679",
            "extra": "mean: 9.072558288889354 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.7689274899208,
            "unit": "iter/sec",
            "range": "stddev: 0.0000754625422856754",
            "extra": "mean: 6.032493635218836 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7340912.858424668,
            "unit": "iter/sec",
            "range": "stddev: 1.811435014430857e-8",
            "extra": "mean: 136.22284030425843 nsec\nrounds: 71943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 497026.23460514477,
            "unit": "iter/sec",
            "range": "stddev: 6.099544704334579e-7",
            "extra": "mean: 2.011966231107369 usec\nrounds: 918"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8106.616074344309,
            "unit": "iter/sec",
            "range": "stddev: 0.000011286531318756817",
            "extra": "mean: 123.3560330018322 usec\nrounds: 4121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 11.21760943320181,
            "unit": "iter/sec",
            "range": "stddev: 0.00023348104214198514",
            "extra": "mean: 89.14555333333378 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 300.4362326770966,
            "unit": "iter/sec",
            "range": "stddev: 0.00005712015794848371",
            "extra": "mean: 3.3284933414631843 msec\nrounds: 287"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 96.4700343715956,
            "unit": "iter/sec",
            "range": "stddev: 0.0007450348645768694",
            "extra": "mean: 10.365913172043376 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1765.4869547695102,
            "unit": "iter/sec",
            "range": "stddev: 0.000012525211534280963",
            "extra": "mean: 566.415966596906 usec\nrounds: 1437"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 42.717140885948254,
            "unit": "iter/sec",
            "range": "stddev: 0.0008201060645567266",
            "extra": "mean: 23.40980644444181 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1891216.0250047136,
            "unit": "iter/sec",
            "range": "stddev: 8.653928196203378e-8",
            "extra": "mean: 528.7603249858819 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 262.90594922961486,
            "unit": "iter/sec",
            "range": "stddev: 0.0004284679593584096",
            "extra": "mean: 3.803641579546864 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.8960804777173,
            "unit": "iter/sec",
            "range": "stddev: 0.027522650333584642",
            "extra": "mean: 27.103149902438318 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 96.60698679889954,
            "unit": "iter/sec",
            "range": "stddev: 0.0007619874064563803",
            "extra": "mean: 10.351218200000739 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 131.17681179540574,
            "unit": "iter/sec",
            "range": "stddev: 0.0004343033374460982",
            "extra": "mean: 7.623298556452822 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 97.88419801111898,
            "unit": "iter/sec",
            "range": "stddev: 0.0007917371119274329",
            "extra": "mean: 10.216153580646457 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 100.88706784937234,
            "unit": "iter/sec",
            "range": "stddev: 0.0002549766781314908",
            "extra": "mean: 9.9120731855646 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9715.166690650622,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017061024759155988",
            "extra": "mean: 102.93184171120284 usec\nrounds: 6147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2230.1595329182937,
            "unit": "iter/sec",
            "range": "stddev: 0.00008936079658995245",
            "extra": "mean: 448.39841510864545 usec\nrounds: 1337"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1794777.7155211403,
            "unit": "iter/sec",
            "range": "stddev: 1.046775223876502e-7",
            "extra": "mean: 557.172061672069 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2252.4310308957624,
            "unit": "iter/sec",
            "range": "stddev: 0.00012249810153105393",
            "extra": "mean: 443.9647590906759 usec\nrounds: 440"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 80.1015097460053,
            "unit": "iter/sec",
            "range": "stddev: 0.019583848412806325",
            "extra": "mean: 12.484159202128778 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 70391.81868074754,
            "unit": "iter/sec",
            "range": "stddev: 9.916844321942446e-7",
            "extra": "mean: 14.20619638392017 usec\nrounds: 13662"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2264.3092913285363,
            "unit": "iter/sec",
            "range": "stddev: 0.00009498468897708105",
            "extra": "mean: 441.6357799836041 usec\nrounds: 1259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 276.0406722664949,
            "unit": "iter/sec",
            "range": "stddev: 0.00026707888244868413",
            "extra": "mean: 3.6226545595229576 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 276.1618635726588,
            "unit": "iter/sec",
            "range": "stddev: 0.00028615760450339145",
            "extra": "mean: 3.6210647881035096 msec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2253.8714107826722,
            "unit": "iter/sec",
            "range": "stddev: 0.00009209531968749833",
            "extra": "mean: 443.68103487001645 usec\nrounds: 1692"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 270.3771897622736,
            "unit": "iter/sec",
            "range": "stddev: 0.00028487985467145013",
            "extra": "mean: 3.6985368509793295 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.94797720778662,
            "unit": "iter/sec",
            "range": "stddev: 0.00020182915396865087",
            "extra": "mean: 18.536376186050294 msec\nrounds: 43"
          }
        ]
      }
    ]
  }
}