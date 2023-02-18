window.BENCHMARK_DATA = {
  "lastUpdate": 1676679775275,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "9587f170e4ec3d2c184c0d9bbbb2bd481d22a187",
          "message": "chore(flake/nixpkgs): `89fc13df` -> `02277dbd`",
          "timestamp": "2023-02-18T00:17:47Z",
          "tree_id": "a3bb214116807de1e952c92ac6a664d62815eb13",
          "url": "https://github.com/ibis-project/ibis/commit/9587f170e4ec3d2c184c0d9bbbb2bd481d22a187"
        },
        "date": 1676679678641,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7428799071256507,
            "unit": "iter/sec",
            "range": "stddev: 0.0033969425092868796",
            "extra": "mean: 1.3461125956000046 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.78780600766322,
            "unit": "iter/sec",
            "range": "stddev: 0.00008437225372709784",
            "extra": "mean: 13.738564944445754 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 43.901805308711445,
            "unit": "iter/sec",
            "range": "stddev: 0.0005424053922926409",
            "extra": "mean: 22.778106571429987 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1421.1841424014715,
            "unit": "iter/sec",
            "range": "stddev: 0.0000187734313259801",
            "extra": "mean: 703.6385857150306 usec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 254.62664314494182,
            "unit": "iter/sec",
            "range": "stddev: 0.00018523663247088824",
            "extra": "mean: 3.927318789773179 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 94.80834109175645,
            "unit": "iter/sec",
            "range": "stddev: 0.0005677366402095417",
            "extra": "mean: 10.547595163933838 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 247.0519460819359,
            "unit": "iter/sec",
            "range": "stddev: 0.00020164881468517503",
            "extra": "mean: 4.047731725490418 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 253.62421420945407,
            "unit": "iter/sec",
            "range": "stddev: 0.00012370041361060038",
            "extra": "mean: 3.9428411956523832 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 337016.94700673304,
            "unit": "iter/sec",
            "range": "stddev: 4.869126852068936e-7",
            "extra": "mean: 2.9672098358306638 usec\nrounds: 610"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 45.61445607447455,
            "unit": "iter/sec",
            "range": "stddev: 0.00041822433986790544",
            "extra": "mean: 21.922874589741983 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 95.5346306879579,
            "unit": "iter/sec",
            "range": "stddev: 0.00004799153788063994",
            "extra": "mean: 10.467408444444319 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 56728.86364027863,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010070519710742888",
            "extra": "mean: 17.62771076010026 usec\nrounds: 12723"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15498029723888657,
            "unit": "iter/sec",
            "range": "stddev: 0.05037485599728262",
            "extra": "mean: 6.452433101600008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 145.37374936772588,
            "unit": "iter/sec",
            "range": "stddev: 0.0005351860752234992",
            "extra": "mean: 6.878821000003787 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 161.19936177626477,
            "unit": "iter/sec",
            "range": "stddev: 0.0006697537718460711",
            "extra": "mean: 6.20349850632747 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.115908447739763,
            "unit": "iter/sec",
            "range": "stddev: 0.00048555544476121444",
            "extra": "mean: 109.69833733333998 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.122432602420695,
            "unit": "iter/sec",
            "range": "stddev: 0.0002928048402172507",
            "extra": "mean: 38.28127400000767 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 626.7465644267226,
            "unit": "iter/sec",
            "range": "stddev: 0.000012378145964876056",
            "extra": "mean: 1.5955412550441148 msec\nrounds: 545"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1603333.358303609,
            "unit": "iter/sec",
            "range": "stddev: 8.971762677531484e-8",
            "extra": "mean: 623.7006139871249 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.201574448040799,
            "unit": "iter/sec",
            "range": "stddev: 0.0013874988514673248",
            "extra": "mean: 454.2203880000102 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 145.0571622187983,
            "unit": "iter/sec",
            "range": "stddev: 0.00011189924148406582",
            "extra": "mean: 6.893834021733038 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 150.393260463046,
            "unit": "iter/sec",
            "range": "stddev: 0.006194937423895434",
            "extra": "mean: 6.649234127387748 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5631776458138478,
            "unit": "iter/sec",
            "range": "stddev: 0.002102727153383211",
            "extra": "mean: 639.7225565999975 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 259.9218840409693,
            "unit": "iter/sec",
            "range": "stddev: 0.000019471234019976754",
            "extra": "mean: 3.847309754966143 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 120.13177245832618,
            "unit": "iter/sec",
            "range": "stddev: 0.00020406353264750744",
            "extra": "mean: 8.324192505749474 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 34.86792854076163,
            "unit": "iter/sec",
            "range": "stddev: 0.0007534591030337826",
            "extra": "mean: 28.679650379315497 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 229.94610037835076,
            "unit": "iter/sec",
            "range": "stddev: 0.000037353816635406934",
            "extra": "mean: 4.3488452222264735 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 159.93090473136104,
            "unit": "iter/sec",
            "range": "stddev: 0.0005928281499550196",
            "extra": "mean: 6.252700200000237 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3928.4236452796263,
            "unit": "iter/sec",
            "range": "stddev: 0.002500489667522684",
            "extra": "mean: 254.55503028589976 usec\nrounds: 1816"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 973.1439824473154,
            "unit": "iter/sec",
            "range": "stddev: 0.00003591421638676835",
            "extra": "mean: 1.027597167569331 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10231.16533761965,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020977173604083797",
            "extra": "mean: 97.7405766597314 usec\nrounds: 874"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 82.3607288768345,
            "unit": "iter/sec",
            "range": "stddev: 0.0005869015318762703",
            "extra": "mean: 12.141708962962673 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 87.77906844508404,
            "unit": "iter/sec",
            "range": "stddev: 0.00007881805627685152",
            "extra": "mean: 11.392237554054423 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5762.376909712795,
            "unit": "iter/sec",
            "range": "stddev: 0.00004764054157568549",
            "extra": "mean: 173.53949865973647 usec\nrounds: 2238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.85187251173602,
            "unit": "iter/sec",
            "range": "stddev: 0.0006547642009063011",
            "extra": "mean: 206.10599259999844 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8517288888436415,
            "unit": "iter/sec",
            "range": "stddev: 0.004170997080891301",
            "extra": "mean: 1.1740825198000038 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5887.968619959325,
            "unit": "iter/sec",
            "range": "stddev: 0.00004908205073213",
            "extra": "mean: 169.8378616710271 usec\nrounds: 2082"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 160.96486882410713,
            "unit": "iter/sec",
            "range": "stddev: 0.0005876355400092854",
            "extra": "mean: 6.212535737178407 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 163.35120775570434,
            "unit": "iter/sec",
            "range": "stddev: 0.0005831713132818322",
            "extra": "mean: 6.121779041239317 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 331.29697191733896,
            "unit": "iter/sec",
            "range": "stddev: 0.00016187883991491825",
            "extra": "mean: 3.018439903668988 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4500.095569440629,
            "unit": "iter/sec",
            "range": "stddev: 0.00001820079504048399",
            "extra": "mean: 222.21750284390112 usec\nrounds: 2110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 33.433330889909186,
            "unit": "iter/sec",
            "range": "stddev: 0.021500345208402282",
            "extra": "mean: 29.910271378369274 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 66.92029930137987,
            "unit": "iter/sec",
            "range": "stddev: 0.00012436855410682157",
            "extra": "mean: 14.943148946427089 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.5544114980441,
            "unit": "iter/sec",
            "range": "stddev: 0.00010872129503250302",
            "extra": "mean: 14.80288226667407 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 89.45474155692986,
            "unit": "iter/sec",
            "range": "stddev: 0.0006176145686458746",
            "extra": "mean: 11.178837282354568 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6017.870637274398,
            "unit": "iter/sec",
            "range": "stddev: 0.00005404762339208408",
            "extra": "mean: 166.171734202136 usec\nrounds: 2991"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 82.89252869210479,
            "unit": "iter/sec",
            "range": "stddev: 0.014625545933366587",
            "extra": "mean: 12.063813419353997 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1953367.0994962666,
            "unit": "iter/sec",
            "range": "stddev: 2.7745288598517187e-8",
            "extra": "mean: 511.9365429360704 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 513.965353629327,
            "unit": "iter/sec",
            "range": "stddev: 0.0000180378187925835",
            "extra": "mean: 1.945656439560715 msec\nrounds: 455"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 88.6297412743418,
            "unit": "iter/sec",
            "range": "stddev: 0.0005929940382144275",
            "extra": "mean: 11.282894270272442 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9705.620097718851,
            "unit": "iter/sec",
            "range": "stddev: 0.000022992378361140547",
            "extra": "mean: 103.0330870085296 usec\nrounds: 5011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 408.42005371631274,
            "unit": "iter/sec",
            "range": "stddev: 0.000029263587196276294",
            "extra": "mean: 2.4484595966842435 msec\nrounds: 362"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 148.572804803346,
            "unit": "iter/sec",
            "range": "stddev: 0.000655285655567476",
            "extra": "mean: 6.730706883562038 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10767.231804939942,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016375385399516338",
            "extra": "mean: 92.8743820246543 usec\nrounds: 5641"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 249.20294741545567,
            "unit": "iter/sec",
            "range": "stddev: 0.00024315084184531828",
            "extra": "mean: 4.012793630136573 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8483127987420324,
            "unit": "iter/sec",
            "range": "stddev: 0.0038478101283254077",
            "extra": "mean: 1.178810459400006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 145.65609938243597,
            "unit": "iter/sec",
            "range": "stddev: 0.00003075653373139181",
            "extra": "mean: 6.8654866101720256 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 170.29489184326732,
            "unit": "iter/sec",
            "range": "stddev: 0.00003667073388485392",
            "extra": "mean: 5.872166740740294 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11569138.219006378,
            "unit": "iter/sec",
            "range": "stddev: 3.0087623907765033e-9",
            "extra": "mean: 86.43686168061426 nsec\nrounds: 113650"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 275.13392168582055,
            "unit": "iter/sec",
            "range": "stddev: 0.00009225510239807903",
            "extra": "mean: 3.6345936330668622 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5214.83615525531,
            "unit": "iter/sec",
            "range": "stddev: 0.00004596460041201724",
            "extra": "mean: 191.76057889992168 usec\nrounds: 2218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 254.895456846823,
            "unit": "iter/sec",
            "range": "stddev: 0.00020282638187731224",
            "extra": "mean: 3.9231770246926785 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19076.28170546781,
            "unit": "iter/sec",
            "range": "stddev: 0.00001175516496440489",
            "extra": "mean: 52.421117251239345 usec\nrounds: 6098"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5144.749072448519,
            "unit": "iter/sec",
            "range": "stddev: 0.00004809414137155884",
            "extra": "mean: 194.37293946079168 usec\nrounds: 2263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 216.19233895105975,
            "unit": "iter/sec",
            "range": "stddev: 0.00905934982586375",
            "extra": "mean: 4.625510806034499 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5400045.118162454,
            "unit": "iter/sec",
            "range": "stddev: 5.371175519599095e-9",
            "extra": "mean: 185.1836379359819 nsec\nrounds: 53764"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 101.21658333280094,
            "unit": "iter/sec",
            "range": "stddev: 0.00008170864965832084",
            "extra": "mean: 9.879803951808885 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1949916.3832245232,
            "unit": "iter/sec",
            "range": "stddev: 3.1269285807854644e-8",
            "extra": "mean: 512.8425037113319 nsec\nrounds: 97088"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 121579.18426356593,
            "unit": "iter/sec",
            "range": "stddev: 3.2013365428844173e-7",
            "extra": "mean: 8.225092198613094 usec\nrounds: 33558"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5869.559586606502,
            "unit": "iter/sec",
            "range": "stddev: 0.00006436997972432838",
            "extra": "mean: 170.37053381004213 usec\nrounds: 2233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.501621946951795,
            "unit": "iter/sec",
            "range": "stddev: 0.0001366808339872715",
            "extra": "mean: 74.06517557142577 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1893405.3066171403,
            "unit": "iter/sec",
            "range": "stddev: 4.762948495923261e-8",
            "extra": "mean: 528.1489370001964 nsec\nrounds: 100000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4656628.085142089,
            "unit": "iter/sec",
            "range": "stddev: 5.495138397933428e-9",
            "extra": "mean: 214.7476632696322 nsec\nrounds: 48080"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 143.11474555603303,
            "unit": "iter/sec",
            "range": "stddev: 0.00009451461898089151",
            "extra": "mean: 6.987400187973466 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 92.48537064863339,
            "unit": "iter/sec",
            "range": "stddev: 0.0006213261325441175",
            "extra": "mean: 10.812520866669376 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.44213103169634,
            "unit": "iter/sec",
            "range": "stddev: 0.00038456537952374605",
            "extra": "mean: 17.408824882353404 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 78.96728876310361,
            "unit": "iter/sec",
            "range": "stddev: 0.01378280482827182",
            "extra": "mean: 12.66347136470559 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 101.03500826132067,
            "unit": "iter/sec",
            "range": "stddev: 0.00015868403899047657",
            "extra": "mean: 9.89755944210509 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5841455215070404,
            "unit": "iter/sec",
            "range": "stddev: 0.0014144081922164873",
            "extra": "mean: 1.7119021941999903 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 238.11485901147984,
            "unit": "iter/sec",
            "range": "stddev: 0.0002245976641875601",
            "extra": "mean: 4.19965391555757 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 580674.7345305174,
            "unit": "iter/sec",
            "range": "stddev: 2.3676108473372537e-7",
            "extra": "mean: 1.7221345109986785 usec\nrounds: 22422"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4240466.133350448,
            "unit": "iter/sec",
            "range": "stddev: 1.0492277856430762e-8",
            "extra": "mean: 235.823130890195 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}