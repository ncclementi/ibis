window.BENCHMARK_DATA = {
  "lastUpdate": 1683306162432,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "gil@forsyth.dev",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "committer": {
            "email": "gforsyth@users.noreply.github.com",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "distinct": true,
          "id": "39b470faec0288581627774d4a313a7511a74f76",
          "message": "docs(numeric): add examples to numeric methods",
          "timestamp": "2023-05-05T12:56:49-04:00",
          "tree_id": "7f0ccc3d909543760468c77a1d717e368608843a",
          "url": "https://github.com/ibis-project/ibis/commit/39b470faec0288581627774d4a313a7511a74f76"
        },
        "date": 1683306072198,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 2859270.964876101,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014525641962823436",
            "extra": "mean: 349.7395008322803 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 182.0259801029105,
            "unit": "iter/sec",
            "range": "stddev: 0.007936957811288418",
            "extra": "mean: 5.49372127777935 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 83.15314358236894,
            "unit": "iter/sec",
            "range": "stddev: 0.012591071808478144",
            "extra": "mean: 12.02600355101946 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 114.29119207159383,
            "unit": "iter/sec",
            "range": "stddev: 0.0002705243055967687",
            "extra": "mean: 8.749580627119403 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 89.80729895313736,
            "unit": "iter/sec",
            "range": "stddev: 0.0008410930909789548",
            "extra": "mean: 11.134952410959526 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 81.4283517438617,
            "unit": "iter/sec",
            "range": "stddev: 0.009943028954468329",
            "extra": "mean: 12.280734886364476 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7025.846567905068,
            "unit": "iter/sec",
            "range": "stddev: 0.00007159418879426597",
            "extra": "mean: 142.33160236776632 usec\nrounds: 1436"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 83.07600981595193,
            "unit": "iter/sec",
            "range": "stddev: 0.0013257760873843164",
            "extra": "mean: 12.037169361111802 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 178.38332324905838,
            "unit": "iter/sec",
            "range": "stddev: 0.0013886021925645852",
            "extra": "mean: 5.605905203390579 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 83.26799690130929,
            "unit": "iter/sec",
            "range": "stddev: 0.001877033721901804",
            "extra": "mean: 12.009415828571182 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 86.34363027569235,
            "unit": "iter/sec",
            "range": "stddev: 0.001523700124532413",
            "extra": "mean: 11.58163024657445 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1674565.387057668,
            "unit": "iter/sec",
            "range": "stddev: 0.000001475174912273665",
            "extra": "mean: 597.1698732869859 nsec\nrounds: 96154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 85.8780183495428,
            "unit": "iter/sec",
            "range": "stddev: 0.0009828278840573542",
            "extra": "mean: 11.644423325300494 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5356638.237297054,
            "unit": "iter/sec",
            "range": "stddev: 4.1935767735143927e-7",
            "extra": "mean: 186.6842515212327 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 25.656691938745983,
            "unit": "iter/sec",
            "range": "stddev: 0.002175272011482355",
            "extra": "mean: 38.97618611111082 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1808.1128201428965,
            "unit": "iter/sec",
            "range": "stddev: 0.00011463269424323732",
            "extra": "mean: 553.0628337234892 usec\nrounds: 1281"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 218.1336039625966,
            "unit": "iter/sec",
            "range": "stddev: 0.00043062211012670655",
            "extra": "mean: 4.584346390625216 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 151.7178843352593,
            "unit": "iter/sec",
            "range": "stddev: 0.004278338822226532",
            "extra": "mean: 6.591180758823695 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 219.3744273338427,
            "unit": "iter/sec",
            "range": "stddev: 0.0006042515024337242",
            "extra": "mean: 4.55841645789555 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 156.89231887473235,
            "unit": "iter/sec",
            "range": "stddev: 0.0007733674369183098",
            "extra": "mean: 6.373798329785862 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1817.3638162440498,
            "unit": "iter/sec",
            "range": "stddev: 0.00011268292381918114",
            "extra": "mean: 550.2475569623161 usec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1554.0764541299934,
            "unit": "iter/sec",
            "range": "stddev: 0.0035882922542577133",
            "extra": "mean: 643.4689859321126 usec\nrounds: 1706"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1713.467840901394,
            "unit": "iter/sec",
            "range": "stddev: 0.00023034832491932404",
            "extra": "mean: 583.611770311333 usec\nrounds: 1637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 319.27336144217367,
            "unit": "iter/sec",
            "range": "stddev: 0.0006150715888721085",
            "extra": "mean: 3.1321122297298785 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 45.84907323589277,
            "unit": "iter/sec",
            "range": "stddev: 0.0036365497317765788",
            "extra": "mean: 21.810691676471095 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1334.8644105925664,
            "unit": "iter/sec",
            "range": "stddev: 0.0003410872477797808",
            "extra": "mean: 749.1397568657068 usec\nrounds: 1238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 221.6164836137423,
            "unit": "iter/sec",
            "range": "stddev: 0.0005009571752769579",
            "extra": "mean: 4.512299733727887 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5972422.774765921,
            "unit": "iter/sec",
            "range": "stddev: 3.0535749808782223e-7",
            "extra": "mean: 167.43623780715717 nsec\nrounds: 56180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.1017394832119574,
            "unit": "iter/sec",
            "range": "stddev: 0.02150867412669919",
            "extra": "mean: 907.6555893999995 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 33.95184275846447,
            "unit": "iter/sec",
            "range": "stddev: 0.0038763511917082223",
            "extra": "mean: 29.45348230769276 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 31.019462441169757,
            "unit": "iter/sec",
            "range": "stddev: 0.02414542643837356",
            "extra": "mean: 32.237824942858346 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1822.0982418263836,
            "unit": "iter/sec",
            "range": "stddev: 0.00012114658164846978",
            "extra": "mean: 548.8178282844112 usec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.11799122061308907,
            "unit": "iter/sec",
            "range": "stddev: 0.10523338519866773",
            "extra": "mean: 8.475206839999988 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 78.22939171004161,
            "unit": "iter/sec",
            "range": "stddev: 0.011225555508709455",
            "extra": "mean: 12.782919285714437 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 209.5459731937414,
            "unit": "iter/sec",
            "range": "stddev: 0.0003743610457076259",
            "extra": "mean: 4.772222461537941 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1780.142393741241,
            "unit": "iter/sec",
            "range": "stddev: 0.0001370685026684336",
            "extra": "mean: 561.7528145590351 usec\nrounds: 1882"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 142.96689241339328,
            "unit": "iter/sec",
            "range": "stddev: 0.0004587459281806132",
            "extra": "mean: 6.994626399995241 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9030.541706348726,
            "unit": "iter/sec",
            "range": "stddev: 0.00004028716095474249",
            "extra": "mean: 110.73532823584345 usec\nrounds: 4643"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 443.482801933407,
            "unit": "iter/sec",
            "range": "stddev: 0.0003443572534320031",
            "extra": "mean: 2.2548788716053956 msec\nrounds: 405"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 88.3960695176933,
            "unit": "iter/sec",
            "range": "stddev: 0.001065281778551844",
            "extra": "mean: 11.312720186046741 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 186.44804857008444,
            "unit": "iter/sec",
            "range": "stddev: 0.009303854042822681",
            "extra": "mean: 5.363424330097547 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 31.41040702416432,
            "unit": "iter/sec",
            "range": "stddev: 0.0015498962258079646",
            "extra": "mean: 31.83658203571481 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2424992.7539087683,
            "unit": "iter/sec",
            "range": "stddev: 3.8886261574697444e-7",
            "extra": "mean: 412.37236622180893 nsec\nrounds: 125001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9689.584743229558,
            "unit": "iter/sec",
            "range": "stddev: 0.00006255098461309473",
            "extra": "mean: 103.2035971096423 usec\nrounds: 4567"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.6724072440864384,
            "unit": "iter/sec",
            "range": "stddev: 0.015276527837194995",
            "extra": "mean: 1.4871939717999965 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 640.5324074776207,
            "unit": "iter/sec",
            "range": "stddev: 0.00017887209291865745",
            "extra": "mean: 1.5612012574632121 msec\nrounds: 536"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.228755491069617,
            "unit": "iter/sec",
            "range": "stddev: 0.005539655093294287",
            "extra": "mean: 448.6808911999958 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 75.49371687376222,
            "unit": "iter/sec",
            "range": "stddev: 0.017221159459549874",
            "extra": "mean: 13.24613545882451 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 84.1504913495048,
            "unit": "iter/sec",
            "range": "stddev: 0.0014460206304858063",
            "extra": "mean: 11.883471908044713 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 50.27750070836624,
            "unit": "iter/sec",
            "range": "stddev: 0.0005826508400353826",
            "extra": "mean: 19.889612369566308 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 2301489.531828221,
            "unit": "iter/sec",
            "range": "stddev: 2.1754202619140358e-7",
            "extra": "mean: 434.50121591719846 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 90.28678242132392,
            "unit": "iter/sec",
            "range": "stddev: 0.0004686360774131318",
            "extra": "mean: 11.075818333335802 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.04552468987162,
            "unit": "iter/sec",
            "range": "stddev: 0.001910283405991131",
            "extra": "mean: 47.51604033332847 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 7.263296575438591,
            "unit": "iter/sec",
            "range": "stddev: 0.005983179933933097",
            "extra": "mean: 137.6785306250028 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 221.37310778788338,
            "unit": "iter/sec",
            "range": "stddev: 0.00038205123205314634",
            "extra": "mean: 4.517260520000406 msec\nrounds: 200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 166.13225998209086,
            "unit": "iter/sec",
            "range": "stddev: 0.0003188621415186365",
            "extra": "mean: 6.019300526627403 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1024.3389795874086,
            "unit": "iter/sec",
            "range": "stddev: 0.00007840397107448649",
            "extra": "mean: 976.239330853921 usec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12062.266643588895,
            "unit": "iter/sec",
            "range": "stddev: 0.00001784983433599271",
            "extra": "mean: 82.90315821624625 usec\nrounds: 6390"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3595.3937786859224,
            "unit": "iter/sec",
            "range": "stddev: 0.00006223532405359975",
            "extra": "mean: 278.1336514314961 usec\nrounds: 1991"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 49.46297534019445,
            "unit": "iter/sec",
            "range": "stddev: 0.0006090168163309649",
            "extra": "mean: 20.21714207692199 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10635373.249923287,
            "unit": "iter/sec",
            "range": "stddev: 5.726593155022784e-8",
            "extra": "mean: 94.02584907010892 nsec\nrounds: 109879"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 32.61337973520675,
            "unit": "iter/sec",
            "range": "stddev: 0.028790643629109453",
            "extra": "mean: 30.66226217948462 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 87.69106242456242,
            "unit": "iter/sec",
            "range": "stddev: 0.0015106748453585811",
            "extra": "mean: 11.403670708862323 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1801.0256858469108,
            "unit": "iter/sec",
            "range": "stddev: 0.0001939139057767832",
            "extra": "mean: 555.2391661364684 usec\nrounds: 1258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 134122.14000548422,
            "unit": "iter/sec",
            "range": "stddev: 0.00002033930015809929",
            "extra": "mean: 7.455890578237942 usec\nrounds: 35843"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 91.12603281030297,
            "unit": "iter/sec",
            "range": "stddev: 0.0008744072097491064",
            "extra": "mean: 10.973812522725527 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.102564910467124,
            "unit": "iter/sec",
            "range": "stddev: 0.046953567750186886",
            "extra": "mean: 906.9760796000025 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 282.19451728893216,
            "unit": "iter/sec",
            "range": "stddev: 0.0003648141411440972",
            "extra": "mean: 3.5436549568967144 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 151.94461071094452,
            "unit": "iter/sec",
            "range": "stddev: 0.0005047060106417663",
            "extra": "mean: 6.581345631944618 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 975140.7333165522,
            "unit": "iter/sec",
            "range": "stddev: 0.00000842692541119078",
            "extra": "mean: 1.0254930040701908 usec\nrounds: 90910"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 68.38222274893315,
            "unit": "iter/sec",
            "range": "stddev: 0.020125806525446613",
            "extra": "mean: 14.623683755813587 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5792524122837827,
            "unit": "iter/sec",
            "range": "stddev: 0.03451790748881098",
            "extra": "mean: 1.7263631169999996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 83.21524742994464,
            "unit": "iter/sec",
            "range": "stddev: 0.0014324689252876348",
            "extra": "mean: 12.01702849999764 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3843849.286217647,
            "unit": "iter/sec",
            "range": "stddev: 7.900400018763084e-7",
            "extra": "mean: 260.1558816533302 nsec\nrounds: 147059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 183.62362139294706,
            "unit": "iter/sec",
            "range": "stddev: 0.00475285041647936",
            "extra": "mean: 5.445922438595418 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 89.69283333403557,
            "unit": "iter/sec",
            "range": "stddev: 0.000905613290574387",
            "extra": "mean: 11.149162790696813 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 89.01572336073393,
            "unit": "iter/sec",
            "range": "stddev: 0.0010825446661993784",
            "extra": "mean: 11.23397038461987 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 73.27253334832622,
            "unit": "iter/sec",
            "range": "stddev: 0.0008143241793875066",
            "extra": "mean: 13.647678799996658 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 570.8292910868759,
            "unit": "iter/sec",
            "range": "stddev: 0.0002228654192038319",
            "extra": "mean: 1.7518372228165981 msec\nrounds: 561"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2383566.1262275474,
            "unit": "iter/sec",
            "range": "stddev: 8.871372263568681e-7",
            "extra": "mean: 419.53944092279744 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 144.75774811682126,
            "unit": "iter/sec",
            "range": "stddev: 0.0003116263126294338",
            "extra": "mean: 6.908093093524693 msec\nrounds: 139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.6667093982943703,
            "unit": "iter/sec",
            "range": "stddev: 0.014860865864770208",
            "extra": "mean: 1.499903859999995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 87.34939504921294,
            "unit": "iter/sec",
            "range": "stddev: 0.0011609774995734825",
            "extra": "mean: 11.448276195119572 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1804.1219078134254,
            "unit": "iter/sec",
            "range": "stddev: 0.0001576747974744876",
            "extra": "mean: 554.286268388586 usec\nrounds: 1781"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 71.88149573947506,
            "unit": "iter/sec",
            "range": "stddev: 0.0006974696448660854",
            "extra": "mean: 13.911786193547883 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 99.82566036280775,
            "unit": "iter/sec",
            "range": "stddev: 0.000568247022092219",
            "extra": "mean: 10.017464411110193 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 16.294604111243558,
            "unit": "iter/sec",
            "range": "stddev: 0.00409392324395854",
            "extra": "mean: 61.370008941179655 msec\nrounds: 17"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 5074618.868949892,
            "unit": "iter/sec",
            "range": "stddev: 4.962275181729771e-7",
            "extra": "mean: 197.05913406005428 nsec\nrounds: 54946"
          }
        ]
      }
    ]
  }
}